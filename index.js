// index.js
const express = require('express');
const { chromium } = require('playwright');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/consulta-cpf', async (req, res) => {
  const cpf = req.query.cpf;
  if (!cpf) return res.json({ status: false, msg: 'Parâmetro cpf ausente.' });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.setExtraHTTPHeaders({
    'User-Agent': 'Mozilla/5.0',
    'Accept-Language': 'pt-BR,pt;q=0.9'
  });

  try {
    await page.goto('https://portal.sisp.es.gov.br/sispes-frontend/xhtml/pesquisa.jsf', { waitUntil: 'domcontentloaded' });

    await page.fill('#j_username', '09750494709');
    await page.fill('#j_password', 'eg4hGxeM');
    await Promise.all([
      page.click('input[name="submit"]'),
      page.waitForNavigation({ waitUntil: 'networkidle' })
    ]);

    await page.fill('#pesquisaform\\:paramPesquisa', cpf);
    await Promise.all([
      page.click('span.ui-button-text.ui-c'),
      page.waitForResponse(r => r.url().includes('pesquisa.jsf') && r.status() === 200)
    ]);

    await page.waitForSelector('div.ui-row-toggler.ui-icon.ui-icon-circle-triangle-e', { timeout: 5000 });
    await page.click('div.ui-row-toggler.ui-icon.ui-icon-circle-triangle-e');

    const nome = await page.locator('#pesquisaform\\:tblPessoas_data tr:nth-child(1) td:nth-child(2)').innerText();
    const nascimento = await page.locator('#pesquisaform\\:tblPessoas_data tr:nth-child(1) td:nth-child(3)').innerText();
    const mae = await page.locator('#pesquisaform\\:tblPessoas_data tr:nth-child(1) td:nth-child(4)').innerText();
    const pai = await page.locator('#pesquisaform\\:tblPessoas_data tr:nth-child(1) td:nth-child(5)').innerText();

    let base64foto = null;
    try {
      await page.click('img[id="pesquisaform:tblPessoas:0:j_idt230"]');
      await page.waitForTimeout(3000);

      const foto = await page.$('img[id^="pesquisaform:dtgImagens:"]');
      if (foto) {
        const path = 'foto.jpg';
        await foto.screenshot({ path });
        const buffer = fs.readFileSync(path);
        base64foto = `data:image/jpeg;base64,${buffer.toString('base64')}`;
        fs.unlinkSync(path);
      }
    } catch (err) {
      base64foto = null;
    }

    await browser.close();

    return res.json({
      status: true,
      codigo: 200,
      criador: "@ALIZINDEV",
      resultado: {
        dados_pessoais: {
          nome,
          nascimento,
          obito: "NÃO"
        },
        filiacao: {
          mae,
          pai
        },
        documentos: {
          rg: "Não informado"
        },
        foto: {
          base64: base64foto
        }
      }
    });

  } catch (error) {
    await browser.close();
    return res.status(500).json({ status: false, erro: "Erro ao processar consulta.", detalhes: error.message });
  }
});

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));

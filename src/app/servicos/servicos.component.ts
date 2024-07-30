import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
  chuveiro = `Garantimos a instalação segura e eficiente de chuveiros elétricos, 
  bem como manutenção preventiva e corretiva para assegurar seu funcionamento ideal.`;

  tomadasInterruptores = `Oferecemos serviços de instalação e reparo de tomadas e interruptores, 
  assegurando conexões seguras e eficientes em sua residência ou comércio.`;

  fiacaoEletrica = `Realizamos a instalação e substituição completa de fiação elétrica, 
  garantindo um sistema seguro e em conformidade com as normas técnicas.`;

  automacaoResidencial = `Proporcionamos a instalação e manutenção de sistemas de automação residencial, 
  permitindo o controle integrado de iluminação, climatização e segurança.`;

  sistemasSeguranca = `Oferecemos serviços completos de instalação e manutenção de sistemas de segurança, 
  incluindo alarmes e câmeras de vigilância, para proteção e monitoramento eficaz.`;

  inspecaoLaudos = `Realizamos inspeções elétricas detalhadas e fornecemos laudos técnicos precisos 
  para assegurar que as instalações elétricas atendam às normas de segurança e desempenho.`;
}

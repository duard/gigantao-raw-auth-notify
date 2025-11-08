import { Tfpfun } from './tfpfun.domain';
import {
  TfpfunResponseDto,
  EmpresaResponseDto,
  FuncionarioResponseDto,
  DocumentosResponseDto,
  EmpregoResponseDto,
  EnderecoResponseDto,
  ContatoResponseDto,
  BancarioResponseDto,
  EsocialResponseDto,
  OutrosResponseDto,
  UsuarioRegistroResponseDto,
  IdentidadeResponseDto,
  CnhResponseDto,
  ReservistaResponseDto,
  CtpsResponseDto,
} from '../dto/tfpfun.dto';
import { TfpfunEntity } from '../../../entities/tFPFUN.entity';
import { trimEnd } from '../../../../utils/string.utils';

const safeTrimEnd = (value: string | null | undefined): string | null => {
  if (typeof value === 'string') {
    return trimEnd(value);
  }
  return null;
};

export class TfpfunMapper {
  static toResponse(domain: Tfpfun): TfpfunResponseDto {
    const dto = new TfpfunResponseDto();

    dto.empresa = new EmpresaResponseDto();
    dto.empresa.codemp = domain.codemp;
    dto.empresa.nomefantasia = null; // This information is not in Tfpfun entity

    dto.funcionario = new FuncionarioResponseDto();
    dto.funcionario.codfunc = domain.codfunc;
    dto.funcionario.nomefunc = safeTrimEnd(domain.nomefunc);
    dto.funcionario.cpf = safeTrimEnd(domain.cpf);
    dto.funcionario.pis = safeTrimEnd(domain.pis);
    dto.funcionario.dtnasc = domain.dtnasc;
    dto.funcionario.sexo = safeTrimEnd(domain.sexo);
    dto.funcionario.estadocivil = domain.estadocivil;
    dto.funcionario.nomemae = safeTrimEnd(domain.nomemae);
    dto.funcionario.nomepai = safeTrimEnd(domain.nomepai);
    dto.funcionario.deficientefisico = safeTrimEnd(domain.deficientefisico);
    dto.funcionario.aprendizgravida = safeTrimEnd(domain.aprendizgravida);
    dto.funcionario.filhosbr = safeTrimEnd(domain.filhosbr);

    dto.documentos = new DocumentosResponseDto();
    dto.documentos.identidade = new IdentidadeResponseDto();
    dto.documentos.identidade.identidade = safeTrimEnd(domain.identidade);
    dto.documentos.identidade.orgaorg = safeTrimEnd(domain.orgaorg);
    dto.documentos.cnh = new CnhResponseDto();
    dto.documentos.cnh.nrocnh = safeTrimEnd(domain.nrocnh);
    dto.documentos.cnh.categoriacnh = safeTrimEnd(domain.categoriacnh);
    dto.documentos.cnh.orgaocnh = safeTrimEnd(domain.orgaocnh);
    dto.documentos.reservista = new ReservistaResponseDto();
    dto.documentos.reservista.nroreservista = safeTrimEnd(domain.nroreservista);
    dto.documentos.ctps = new CtpsResponseDto();
    dto.documentos.ctps.numcps = domain.numcps;
    dto.documentos.ctps.seriecps = safeTrimEnd(domain.seriecps);
    dto.documentos.ctps.ctpsdigital = safeTrimEnd(domain.ctpsdigital);

    dto.emprego = new EmpregoResponseDto();
    dto.emprego.codcargo = domain.codcargo?.codcargo;
    dto.emprego.descrcargo = null; // This information is not in Tfpfun entity
    dto.emprego.situacao = safeTrimEnd(domain.situacao);
    dto.emprego.dtadm = domain.dtadm;
    dto.emprego.dtdem = domain.dtdem;
    dto.emprego.primemprego = safeTrimEnd(domain.primemprego);
    dto.emprego.novoemprego = safeTrimEnd(domain.novoemprego);
    dto.emprego.matriculaold = safeTrimEnd(domain.matriculaold);

    dto.endereco = new EnderecoResponseDto();
    dto.endereco.codend = domain.codend?.codend;
    dto.endereco.nomeend = null; // This information is not in Tfpfun entity
    dto.endereco.numend = safeTrimEnd(domain.numend);
    dto.endereco.codbai = domain.codbai?.codbai;
    dto.endereco.nomebai = null; // This information is not in Tfpfun entity
    dto.endereco.codcid = domain.codc?.codcid;
    dto.endereco.nomecid = null; // This information is not in Tfpfun entity
    dto.endereco.cep = safeTrimEnd(domain.cep);

    dto.contato = new ContatoResponseDto();
    dto.contato.email = safeTrimEnd(domain.email);
    dto.contato.celular = safeTrimEnd(domain.celular);

    dto.bancario = new BancarioResponseDto();
    dto.bancario.tipconta = safeTrimEnd(domain.tipconta);
    dto.bancario.codctabco = safeTrimEnd(domain.codctabco);

    dto.esocial = new EsocialResponseDto();
    dto.esocial.reciboesocial2200 = safeTrimEnd(domain.reciboesocial2200);
    dto.esocial.motdesligesocial = safeTrimEnd(domain.motdesligesocial);
    dto.esocial.sitesocial = safeTrimEnd(domain.sitesocial);
    dto.esocial.sitsind = safeTrimEnd(domain.sitsind);
    dto.esocial.temcontribsindical = safeTrimEnd(domain.temcontribsindical);
    dto.esocial.provisaoferias = safeTrimEnd(domain.provisaoferias);
    dto.esocial.provisao13 = safeTrimEnd(domain.provisao13);
    dto.esocial.cagedadm = safeTrimEnd(domain.cagedadm);
    dto.esocial.envesocial = safeTrimEnd(domain.envesocial);
    dto.esocial.nisenviado = safeTrimEnd(domain.nisenviado);

    dto.outros = new OutrosResponseDto();
    dto.outros.tipsal = safeTrimEnd(domain.tipsal);
    dto.outros.tiptab = safeTrimEnd(domain.tiptab);
    dto.outros.afastfgts = safeTrimEnd(domain.afastfgts);
    dto.outros.convmed = safeTrimEnd(domain.convmed);
    dto.outros.tipreceb = safeTrimEnd(domain.tipreceb);
    dto.outros.codadmfgts = safeTrimEnd(domain.codadmfgts);
    dto.outros.codadmfgtsii = safeTrimEnd(domain.codadmfgtsii);
    dto.outros.traboutraemp = safeTrimEnd(domain.traboutraemp);
    dto.outros.partpat = safeTrimEnd(domain.partpat);
    dto.outros.sindicalizado = safeTrimEnd(domain.sindicalizado);
    dto.outros.tipponto = safeTrimEnd(domain.tipponto);
    dto.outros.dirreciproco = safeTrimEnd(domain.dirreciproco);
    dto.outros.possuirra = safeTrimEnd(domain.possuirra);
    dto.outros.tempoparcial = safeTrimEnd(domain.tempoparcial);
    dto.outros.semintegral = safeTrimEnd(domain.semintegral);
    dto.outros.compensasabado = safeTrimEnd(domain.compensasabado);
    dto.outros.dispensaponto = safeTrimEnd(domain.dispensaponto);
    dto.outros.mei = safeTrimEnd(domain.mei);
    dto.outros.casadobr = safeTrimEnd(domain.casadobr);
    dto.outros.segdesemprego = safeTrimEnd(domain.segdesemprego);
    dto.outros.trabaposent = safeTrimEnd(domain.trabaposent);
    dto.outros.infocota = safeTrimEnd(domain.infocota);
    dto.outros.suspexpafast = safeTrimEnd(domain.suspexpafast);
    dto.outros.temdescassist = safeTrimEnd(domain.temdescassist);
    dto.outros.idconsig = safeTrimEnd(domain.idconsig);
    dto.outros.dispperexp = safeTrimEnd(domain.dispperexp);
    dto.outros.jornadaespprof = safeTrimEnd(domain.jornadaespprof);
    dto.outros.cadini = safeTrimEnd(domain.cadini);
    dto.outros.aderimp927 = safeTrimEnd(domain.aderimp927);
    dto.outros.ajudacomp = safeTrimEnd(domain.ajudacomp);
    dto.outros.suspcontrato = safeTrimEnd(domain.suspcontrato);
    dto.outros.transfexterna = safeTrimEnd(domain.transfexterna);
    dto.outros.bloqueiabatidaonline = safeTrimEnd(domain.bloqueiabatidaonline);
    dto.outros.dispensamatricula = safeTrimEnd(domain.dispensamatricula);
    dto.outros.pvd = safeTrimEnd(domain.pvd);

    dto.usuarioRegistro = new UsuarioRegistroResponseDto();
    dto.usuarioRegistro.codusu = domain.codusu?.codusu;
    dto.usuarioRegistro.nomeusu = null; // This information is not in Tfpfun entity

    return dto;
  }

  static toDomain(entity: TfpfunEntity): Tfpfun {
    const domain = new Tfpfun();
    domain.codemp = entity.codemp;
    domain.codfunc = entity.codfunc;
    domain.nomefunc = entity.nomefunc;
    domain.cpf = entity.cpf;
    domain.pis = entity.pis;
    domain.dtnasc = entity.dtnasc;
    domain.sexo = entity.sexo;
    domain.estadocivil = entity.estadocivil;
    domain.nomemae = entity.nomemae;
    domain.nomepai = entity.nomepai;
    domain.deficientefisico = entity.deficientefisico;
    domain.aprendizgravida = entity.aprendizgravida;
    domain.filhosbr = entity.filhosbr;
    domain.identidade = entity.identidade;
    domain.orgaorg = entity.orgaorg;
    domain.nrocnh = entity.nrocnh;
    domain.categoriacnh = entity.categoriacnh;
    domain.orgaocnh = entity.orgaocnh;
    domain.nroreservista = entity.nroreservista;
    domain.numcps = entity.numcps;
    domain.seriecps = entity.seriecps;
    domain.ctpsdigital = entity.ctpsdigital;
    domain.codcargo = entity.codcargo;
    domain.situacao = entity.situacao;
    domain.dtadm = entity.dtadm;
    domain.dtdem = entity.dtdem;
    domain.primemprego = entity.primemprego;
    domain.novoemprego = entity.novoemprego;
    domain.matriculaold = entity.matriculaold;
    domain.codend = entity.codend;
    domain.numend = entity.numend;
    domain.codbai = entity.codbai;
    domain.codc = entity.codc;
    domain.cep = entity.cep;
    domain.email = entity.email;
    domain.celular = entity.celular;
    domain.tipconta = entity.tipconta;
    domain.codctabco = entity.codctabco;
    domain.reciboesocial2200 = entity.reciboesocial2200;
    domain.motdesligesocial = entity.motdesligesocial;
    domain.sitesocial = entity.sitesocial;
    domain.sitsind = entity.sitsind;
    domain.temcontribsindical = entity.temcontribsindical;
    domain.provisaoferias = entity.provisaoferias;
    domain.provisao13 = entity.provisao13;
    domain.cagedadm = entity.cagedadm;
    domain.envesocial = entity.envesocial;
    domain.nisenviado = entity.nisenviado;
    domain.tipsal = entity.tipsal;
    domain.tiptab = entity.tiptab;
    domain.afastfgts = entity.afastfgts;
    domain.convmed = entity.convmed;
    domain.tipreceb = entity.tipreceb;
    domain.codadmfgts = entity.codadmfgts;
    domain.codadmfgtsii = entity.codadmfgtsii;
    domain.traboutraemp = entity.traboutraemp;
    domain.partpat = entity.partpat;
    domain.sindicalizado = entity.sindicalizado;
    domain.tipponto = entity.tipponto;
    domain.dirreciproco = entity.dirreciproco;
    domain.possuirra = entity.possuirra;
    domain.tempoparcial = entity.tempoparcial;
    domain.semintegral = entity.semintegral;
    domain.compensasabado = entity.compensasabado;
    domain.dispensaponto = entity.dispensaponto;
    domain.mei = entity.mei;
    domain.casadobr = entity.casadobr;
    domain.segdesemprego = entity.segdesemprego;
    domain.trabaposent = entity.trabaposent;
    domain.infocota = entity.infocota;
    domain.suspexpafast = entity.suspexpafast;
    domain.temdescassist = entity.temdescassist;
    domain.idconsig = entity.idconsig;
    domain.dispperexp = entity.dispperexp;
    domain.jornadaespprof = entity.jornadaespprof;
    domain.cadini = entity.cadini;
    domain.aderimp927 = entity.aderimp927;
    domain.ajudacomp = entity.ajudacomp;
    domain.suspcontrato = entity.suspcontrato;
    domain.transfexterna = entity.transfexterna;
    domain.bloqueiabatidaonline = entity.bloqueiabatidaonline;
    domain.dispensamatricula = entity.dispensamatricula;
    domain.pvd = entity.pvd;
    domain.codusu = entity.codusu;

    return domain;
  }
}

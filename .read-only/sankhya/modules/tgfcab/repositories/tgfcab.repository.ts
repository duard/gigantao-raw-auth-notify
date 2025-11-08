import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginatedOutputDto } from 'src/utils/dto/paginated-output.dto';
import { Brackets, Repository } from 'typeorm';
import { TgfcabEntity } from '../../../entities/tGFCAB.entity';
import { Tgfcab } from '../domain/tgfcab.domain';
import { TgfcabMapper } from '../domain/tgfcab.mapper';
import { QueryTgfcabDto } from '../dto/query-tgfcab.dto';
import { TgfcabRepository } from './tgfcab.repository.abstract';

@Injectable()
export class TgfcabRepositoryImpl extends TgfcabRepository {
  constructor(
    @InjectRepository(TgfcabEntity)
    private readonly repository: Repository<TgfcabEntity>,
  ) {
    super();
  }

  async findAll(query: QueryTgfcabDto): Promise<PaginatedOutputDto<Tgfcab>> {
    const queryBuilder = this.repository.createQueryBuilder('tgfcab');

    queryBuilder
      .leftJoinAndSelect('tgfcab.codusu2', 'codusu2')
      .leftJoinAndSelect('tgfcab.nulotenfe', 'nulotenfe')
      .leftJoinAndSelect('tgfcab.nulotenfse', 'nulotenfse')
      .leftJoinAndSelect('tgfcab.codveiculo', 'codveiculo')
      .leftJoinAndSelect('tgfcab.tgftop', 'tgftop')
      .leftJoinAndSelect('tgfcab.codcidinicte', 'codcidinicte')
      .leftJoinAndSelect('tgfcab.codcidfimcte', 'codcidfimcte')
      .leftJoinAndSelect('tgfcab.codparc2', 'codparc2')
      .leftJoinAndSelect('codcidinicte.uf2', 'uf2_inicte')
      .leftJoinAndSelect('codcidfimcte.uf2', 'uf2_fimcte')
      .leftJoinAndSelect('tgfcab.tgfites', 'tgfites')
      .leftJoinAndSelect('tgfites.codprod2', 'codprod2');

    if (query.nunota) {
      queryBuilder.andWhere('tgfcab.nunota = :nunota', {
        nunota: query.nunota,
      });
    }

    if (query.codemp) {
      queryBuilder.andWhere('tgfcab.codemp = :codemp', {
        codemp: query.codemp,
      });
    }

    if (query.numnota) {
      queryBuilder.andWhere('tgfcab.numnota = :numnota', {
        numnota: query.numnota,
      });
    }

    if (query.serienota) {
      queryBuilder.andWhere('tgfcab.serienota = :serienota', {
        serienota: query.serienota,
      });
    }

    if (query.dtneg) {
      queryBuilder.andWhere('tgfcab.dtneg = :dtneg', { dtneg: query.dtneg });
    }

    if (query.codparc) {
      queryBuilder.andWhere('tgfcab.codparc = :codparc', {
        codparc: query.codparc,
      });
    }

    if (query.tipmov) {
      queryBuilder.andWhere('tgfcab.tipmov = :tipmov', {
        tipmov: query.tipmov,
      });
    }

    if (query.statusnota) {
      queryBuilder.andWhere('tgfcab.statusnota = :statusnota', {
        statusnota: query.statusnota,
      });
    }

    if (query.dtmovIni && query.dtmovFim) {
      queryBuilder.andWhere('tgfcab.dtmov BETWEEN :dtmovIni AND :dtmovFim', {
        dtmovIni: query.dtmovIni,
        dtmovFim: query.dtmovFim,
      });
    } else if (query.dtmovIni) {
      queryBuilder.andWhere('tgfcab.dtmov >= :dtmovIni', {
        dtmovIni: query.dtmovIni,
      });
    } else if (query.dtmovFim) {
      queryBuilder.andWhere('tgfcab.dtmov <= :dtmovFim', {
        dtmovFim: query.dtmovFim,
      });
    }

    if (query.dtnegIni && query.dtnegFim) {
      queryBuilder.andWhere('tgfcab.dtneg BETWEEN :dtnegIni AND :dtnegFim', {
        dtnegIni: query.dtnegIni,
        dtnegFim: query.dtnegFim,
      });
    } else if (query.dtnegIni) {
      queryBuilder.andWhere('tgfcab.dtneg >= :dtnegIni', {
        dtnegIni: query.dtnegIni,
      });
    } else if (query.dtnegFim) {
      queryBuilder.andWhere('tgfcab.dtneg <= :dtnegFim', {
        dtnegFim: query.dtnegFim,
      });
    }

    if (query.isPendente !== undefined) {
      queryBuilder.andWhere('tgfcab.pendente = :pendente', {
        pendente: query.isPendente ? 'S' : 'N',
      });
    }

    if (query.codtipoper) {
      queryBuilder.andWhere('tgfcab.codtipoper = :codtipoper', {
        codtipoper: query.codtipoper,
      });
    }

    if (query.dtfaturIni && query.dtfaturFim) {
      queryBuilder.andWhere(
        'tgfcab.dtfatur BETWEEN :dtfaturIni AND :dtfaturFim',
        {
          dtfaturIni: query.dtfaturIni,
          dtfaturFim: query.dtfaturFim,
        },
      );
    } else if (query.dtfaturIni) {
      queryBuilder.andWhere('tgfcab.dtfatur >= :dtfaturIni', {
        dtfaturIni: query.dtfaturIni,
      });
    } else if (query.dtfaturFim) {
      queryBuilder.andWhere('tgfcab.dtfatur <= :dtfaturFim', {
        dtfaturFim: query.dtfaturFim,
      });
    }

    if (query.dtentsaiIni && query.dtentsaiFim) {
      queryBuilder.andWhere(
        'tgfcab.dtentsai BETWEEN :dtentsaiIni AND :dtentsaiFim',
        {
          dtentsaiIni: query.dtentsaiIni,
          dtentsaiFim: query.dtentsaiFim,
        },
      );
    } else if (query.dtentsaiIni) {
      queryBuilder.andWhere('tgfcab.dtentsai >= :dtentsaiIni', {
        dtentsaiIni: query.dtentsaiIni,
      });
    } else if (query.dtentsaiFim) {
      queryBuilder.andWhere('tgfcab.dtentsai <= :dtentsaiFim', {
        dtentsaiFim: query.dtentsaiFim,
      });
    }

    if (query.dtalterIni && query.dtalterFim) {
      queryBuilder.andWhere(
        'tgfcab.dtalter BETWEEN :dtalterIni AND :dtalterFim',
        {
          dtalterIni: query.dtalterIni,
          dtalterFim: query.dtalterFim,
        },
      );
    } else if (query.dtalterIni) {
      queryBuilder.andWhere('tgfcab.dtalter >= :dtalterIni', {
        dtalterIni: query.dtalterIni,
      });
    } else if (query.dtalterFim) {
      queryBuilder.andWhere('tgfcab.dtalter <= :dtalterFim', {
        dtalterFim: query.dtalterFim,
      });
    }

    if (query.vlrnotaIni && query.vlrnotaFim) {
      queryBuilder.andWhere(
        'tgfcab.vlrnota BETWEEN :vlrnotaIni AND :vlrnotaFim',
        {
          vlrnotaIni: query.vlrnotaIni,
          vlrnotaFim: query.vlrnotaFim,
        },
      );
    } else if (query.vlrnotaIni) {
      queryBuilder.andWhere('tgfcab.vlrnota >= :vlrnotaIni', {
        vlrnotaIni: query.vlrnotaIni,
      });
    } else if (query.vlrnotaFim) {
      queryBuilder.andWhere('tgfcab.vlrnota <= :vlrnotaFim', {
        vlrnotaFim: query.vlrnotaFim,
      });
    }

    if (query.pesoIni && query.pesoFim) {
      queryBuilder.andWhere('tgfcab.peso BETWEEN :pesoIni AND :pesoFim', {
        pesoIni: query.pesoIni,
        pesoFim: query.pesoFim,
      });
    } else if (query.pesoIni) {
      queryBuilder.andWhere('tgfcab.peso >= :pesoIni', {
        pesoIni: query.pesoIni,
      });
    } else if (query.pesoFim) {
      queryBuilder.andWhere('tgfcab.peso <= :pesoFim', {
        pesoFim: query.pesoFim,
      });
    }

    if (query.codcontato) {
      queryBuilder.andWhere('tgfcab.codcontato = :codcontato', {
        codcontato: query.codcontato,
      });
    }

    if (query.numcotacao) {
      queryBuilder.andWhere('tgfcab.numcotacao = :numcotacao', {
        numcotacao: query.numcotacao,
      });
    }

    if (query.ordemcarga) {
      queryBuilder.andWhere('tgfcab.ordemcarga = :ordemcarga', {
        ordemcarga: query.ordemcarga,
      });
    }

    if (query.codparctransp) {
      queryBuilder.andWhere('tgfcab.codparctransp = :codparctransp', {
        codparctransp: query.codparctransp,
      });
    }

    if (query.codproj) {
      queryBuilder.andWhere('tgfcab.codproj = :codproj', {
        codproj: query.codproj,
      });
    }

    if (query.numcontrato) {
      queryBuilder.andWhere('tgfcab.numcontrato = :numcontrato', {
        numcontrato: query.numcontrato,
      });
    }

    if (query.nurem) {
      queryBuilder.andWhere('tgfcab.nurem = :nurem', { nurem: query.nurem });
    }

    if (query.cifFob) {
      queryBuilder.andWhere('tgfcab.cifFob = :cifFob', {
        cifFob: query.cifFob,
      });
    }

    if (query.chavenfe) {
      queryBuilder.andWhere('tgfcab.chavenfe = :chavenfe', {
        chavenfe: query.chavenfe,
      });
    }

    if (query.statusnfe) {
      queryBuilder.andWhere('tgfcab.statusnfe = :statusnfe', {
        statusnfe: query.statusnfe,
      });
    }

    if (query.statusnfse) {
      queryBuilder.andWhere('tgfcab.statusnfse = :statusnfse', {
        statusnfse: query.statusnfse,
      });
    }

    if (query.tipfrete) {
      queryBuilder.andWhere('tgfcab.tipfrete = :tipfrete', {
        tipfrete: query.tipfrete,
      });
    }

    if (query.isRateado !== undefined) {
      if (query.isRateado) {
        queryBuilder.andWhere('tgfcab.rateado = :rateado', { rateado: 'S' });
      } else {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where('tgfcab.rateado = :rateado', { rateado: 'N' }).orWhere(
              'tgfcab.rateado IS NULL',
            );
          }),
        );
      }
    }

    if (query.isAprovado !== undefined) {
      if (query.isAprovado) {
        queryBuilder.andWhere('tgfcab.aprovado = :aprovado', { aprovado: 'S' });
      } else {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where('tgfcab.aprovado = :aprovado', { aprovado: 'N' }).orWhere(
              'tgfcab.aprovado IS NULL',
            );
          }),
        );
      }
    }

    if (query.isIrfRetido !== undefined) {
      if (query.isIrfRetido) {
        queryBuilder.andWhere('tgfcab.irfretido = :irfretido', {
          irfretido: 'S',
        });
      } else {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where('tgfcab.irfretido = :irfretido', {
              irfretido: 'N',
            }).orWhere('tgfcab.irfretido IS NULL');
          }),
        );
      }
    }

    if (query.isIssRetido !== undefined) {
      if (query.isIssRetido) {
        queryBuilder.andWhere('tgfcab.issretido = :issretido', {
          issretido: 'S',
        });
      } else {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where('tgfcab.issretido = :issretido', {
              issretido: 'N',
            }).orWhere('tgfcab.issretido IS NULL');
          }),
        );
      }
    }

    if (query.sort && query.sort.length > 0) {
      query.sort.forEach((sort) => {
        queryBuilder.addOrderBy(
          `tgfcab.${sort.orderBy}`,
          sort.order as 'ASC' | 'DESC',
        );
      });
    } else {
      queryBuilder.orderBy('tgfcab.nunota', 'DESC');
    }

    queryBuilder
      .skip(query.page ? (query.page - 1) * (query.limit || 10) : 0)
      .take(query.limit || 10);

    const [entities, total] = await queryBuilder.getManyAndCount();

    const lastPage = Math.ceil(total / (query.limit || 10));
    const hasMore = (query.page || 1) < lastPage;

    return {
      data: entities.map((item) => TgfcabMapper.toDomain(item)),
      meta: {
        total,
        lastPage,
        currentPage: query.page || 1,
        perPage: query.limit || 10,
        prev: (query.page || 1) > 1 ? (query.page || 1) - 1 : null,
        next: hasMore ? (query.page || 1) + 1 : null,
        hasMore,
      },
    };
  }

  async findById(id: number): Promise<Tgfcab | null> {
    const entity = await this.repository.findOne({
      where: { nunota: id },
      relations: [
        'codusu2',
        'nulotenfe',
        'nulotenfse',
        'codveiculo',
        'tgftop',
        'codcidinicte',
        'codcidfimcte',
        'codparc2',
        'codcidinicte.uf2',
        'codcidfimcte.uf2',
      ],
    });
    return entity ? TgfcabMapper.toDomain(entity) : null;
  }

  async findAllSummarized(
    query: QueryTgfcabDto,
  ): Promise<PaginatedOutputDto<Tgfcab>> {
    const queryBuilder = this.repository.createQueryBuilder('tgfcab');

    console.log('inicio do query builder findAllSummarized', query);

    queryBuilder
      .leftJoinAndSelect('tgfcab.codusu2', 'codusu2')
      .leftJoinAndSelect('tgfcab.tgftop', 'tgftop')
      .leftJoinAndSelect('tgfcab.codparc2', 'codparc2')
      .leftJoinAndSelect('tgfcab.tgfparRemetente', 'remetente')
      .leftJoinAndSelect('tgfcab.codcidinicte', 'cidadeOrigem')
      .leftJoinAndSelect('tgfcab.codcidfimcte', 'cidadeDestino')
      .leftJoinAndSelect('tgfcab.adNunotapedcompra', 'adNunotapedcompra')
      .leftJoinAndSelect('tgfcab.tgflibs', 'tgflibs')
      .leftJoinAndSelect('tgfcab.numcotacao2', 'cotacao')
      .leftJoinAndSelect('tgfcab.codparctransp2', 'transportadora')
      .leftJoinAndSelect('tgfcab.codmotorista2', 'motorista')
      .leftJoinAndSelect('tgfcab.codveiculo', 'veiculo')
      .leftJoinAndSelect('tgfcab.codemp2', 'empresa')
      .leftJoinAndSelect('tgfcab.tgfcots', 'tgfcots')
      .leftJoinAndSelect('tgfcots.codusu', 'comprador')
      .leftJoinAndSelect('tgflibs.codusu2', 'liberador');

    if (query.nunota) {
      queryBuilder.andWhere('tgfcab.nunota = :nunota', {
        nunota: query.nunota,
      });
    }

    if (query.codemp) {
      queryBuilder.andWhere('tgfcab.codemp = :codemp', {
        codemp: query.codemp,
      });
    }

    if (query.numnota) {
      queryBuilder.andWhere('tgfcab.numnota = :numnota', {
        numnota: query.numnota,
      });
    }

    if (query.serienota) {
      queryBuilder.andWhere('tgfcab.serienota = :serienota', {
        serienota: query.serienota,
      });
    }

    if (query.dtneg) {
      queryBuilder.andWhere('tgfcab.dtneg = :dtneg', { dtneg: query.dtneg });
    }

    if (query.codparc) {
      queryBuilder.andWhere('tgfcab.codparc = :codparc', {
        codparc: query.codparc,
      });
    }

    if (query.tipmov) {
      queryBuilder.andWhere('tgfcab.tipmov = :tipmov', {
        tipmov: query.tipmov,
      });
    }

    if (query.statusnota) {
      queryBuilder.andWhere('tgfcab.statusnota = :statusnota', {
        statusnota: query.statusnota,
      });
    }

    if (query.dtmovIni && query.dtmovFim) {
      queryBuilder.andWhere('tgfcab.dtmov BETWEEN :dtmovIni AND :dtmovFim', {
        dtmovIni: query.dtmovIni,
        dtmovFim: query.dtmovFim,
      });
    } else if (query.dtmovIni) {
      queryBuilder.andWhere('tgfcab.dtmov >= :dtmovIni', {
        dtmovIni: query.dtmovIni,
      });
    } else if (query.dtmovFim) {
      queryBuilder.andWhere('tgfcab.dtmov <= :dtmovFim', {
        dtmovFim: query.dtmovFim,
      });
    }

    if (query.dtnegIni && query.dtnegFim) {
      queryBuilder.andWhere('tgfcab.dtneg BETWEEN :dtnegIni AND :dtnegFim', {
        dtnegIni: query.dtnegIni,
        dtnegFim: query.dtnegFim,
      });
    } else if (query.dtnegIni) {
      queryBuilder.andWhere('tgfcab.dtneg >= :dtnegIni', {
        dtnegIni: query.dtnegIni,
      });
    } else if (query.dtnegFim) {
      queryBuilder.andWhere('tgfcab.dtneg <= :dtnegFim', {
        dtnegFim: query.dtnegFim,
      });
    }

    if (query.isPendente !== undefined) {
      queryBuilder.andWhere('tgfcab.pendente = :pendente', {
        pendente: query.isPendente ? 'S' : 'N',
      });
    }

    if (query.codtipoper) {
      queryBuilder.andWhere('tgfcab.codtipoper = :codtipoper', {
        codtipoper: query.codtipoper,
      });
    }

    if (query.dtfaturIni && query.dtfaturFim) {
      queryBuilder.andWhere(
        'tgfcab.dtfatur BETWEEN :dtfaturIni AND :dtfaturFim',
        {
          dtfaturIni: query.dtfaturIni,
          dtfaturFim: query.dtfaturFim,
        },
      );
    } else if (query.dtfaturIni) {
      queryBuilder.andWhere('tgfcab.dtfatur >= :dtfaturIni', {
        dtfaturIni: query.dtfaturIni,
      });
    } else if (query.dtfaturFim) {
      queryBuilder.andWhere('tgfcab.dtfatur <= :dtfaturFim', {
        dtfaturFim: query.dtfaturFim,
      });
    }

    if (query.dtentsaiIni && query.dtentsaiFim) {
      queryBuilder.andWhere(
        'tgfcab.dtentsai BETWEEN :dtentsaiIni AND :dtentsaiFim',
        {
          dtentsaiIni: query.dtentsaiIni,
          dtentsaiFim: query.dtentsaiFim,
        },
      );
    } else if (query.dtentsaiIni) {
      queryBuilder.andWhere('tgfcab.dtentsai >= :dtentsaiIni', {
        dtentsaiIni: query.dtentsaiIni,
      });
    } else if (query.dtentsaiFim) {
      queryBuilder.andWhere('tgfcab.dtentsai <= :dtentsaiFim', {
        dtentsaiFim: query.dtentsaiFim,
      });
    }

    if (query.dtalterIni && query.dtalterFim) {
      queryBuilder.andWhere(
        'tgfcab.dtalter BETWEEN :dtalterIni AND :dtalterFim',
        {
          dtalterIni: query.dtalterIni,
          dtalterFim: query.dtalterFim,
        },
      );
    } else if (query.dtalterIni) {
      queryBuilder.andWhere('tgfcab.dtalter >= :dtalterIni', {
        dtalterIni: query.dtalterIni,
      });
    } else if (query.dtalterFim) {
      queryBuilder.andWhere('tgfcab.dtalter <= :dtalterFim', {
        dtalterFim: query.dtalterFim,
      });
    }

    if (query.vlrnotaIni && query.vlrnotaFim) {
      queryBuilder.andWhere(
        'tgfcab.vlrnota BETWEEN :vlrnotaIni AND :vlrnotaFim',
        {
          vlrnotaIni: query.vlrnotaIni,
          vlrnotaFim: query.vlrnotaFim,
        },
      );
    } else if (query.vlrnotaIni) {
      queryBuilder.andWhere('tgfcab.vlrnota >= :vlrnotaIni', {
        vlrnotaIni: query.vlrnotaIni,
      });
    } else if (query.vlrnotaFim) {
      queryBuilder.andWhere('tgfcab.vlrnota <= :vlrnotaFim', {
        vlrnotaFim: query.vlrnotaFim,
      });
    }

    if (query.pesoIni && query.pesoFim) {
      queryBuilder.andWhere('tgfcab.peso BETWEEN :pesoIni AND :pesoFim', {
        pesoIni: query.pesoIni,
        pesoFim: query.pesoFim,
      });
    } else if (query.pesoIni) {
      queryBuilder.andWhere('tgfcab.peso >= :pesoIni', {
        pesoIni: query.pesoIni,
      });
    } else if (query.pesoFim) {
      queryBuilder.andWhere('tgfcab.peso <= :pesoFim', {
        pesoFim: query.pesoFim,
      });
    }

    if (query.codcontato) {
      queryBuilder.andWhere('tgfcab.codcontato = :codcontato', {
        codcontato: query.codcontato,
      });
    }

    if (query.numcotacao) {
      queryBuilder.andWhere('tgfcab.numcotacao = :numcotacao', {
        numcotacao: query.numcotacao,
      });
    }

    if (query.ordemcarga) {
      queryBuilder.andWhere('tgfcab.ordemcarga = :ordemcarga', {
        ordemcarga: query.ordemcarga,
      });
    }

    if (query.codparctransp) {
      queryBuilder.andWhere('tgfcab.codparctransp = :codparctransp', {
        codparctransp: query.codparctransp,
      });
    }

    if (query.codproj) {
      queryBuilder.andWhere('tgfcab.codproj = :codproj', {
        codproj: query.codproj,
      });
    }

    if (query.numcontrato) {
      queryBuilder.andWhere('tgfcab.numcontrato = :numcontrato', {
        numcontrato: query.numcontrato,
      });
    }

    if (query.nurem) {
      queryBuilder.andWhere('tgfcab.nurem = :nurem', { nurem: query.nurem });
    }

    if (query.cifFob) {
      queryBuilder.andWhere('tgfcab.cifFob = :cifFob', {
        cifFob: query.cifFob,
      });
    }

    if (query.chavenfe) {
      queryBuilder.andWhere('tgfcab.chavenfe = :chavenfe', {
        chavenfe: query.chavenfe,
      });
    }

    if (query.statusnfe) {
      queryBuilder.andWhere('tgfcab.statusnfe = :statusnfe', {
        statusnfe: query.statusnfe,
      });
    }

    if (query.statusnfse) {
      queryBuilder.andWhere('tgfcab.statusnfse = :statusnfse', {
        statusnfse: query.statusnfse,
      });
    }

    if (query.tipfrete) {
      queryBuilder.andWhere('tgfcab.tipfrete = :tipfrete', {
        tipfrete: query.tipfrete,
      });
    }

    if (query.isRateado !== undefined) {
      if (query.isRateado) {
        queryBuilder.andWhere('tgfcab.rateado = :rateado', { rateado: 'S' });
      } else {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where('tgfcab.rateado = :rateado', { rateado: 'N' }).orWhere(
              'tgfcab.rateado IS NULL',
            );
          }),
        );
      }
    }

    if (query.isAprovado !== undefined) {
      if (query.isAprovado) {
        queryBuilder.andWhere('tgfcab.aprovado = :aprovado', { aprovado: 'S' });
      } else {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where('tgfcab.aprovado = :aprovado', { aprovado: 'N' }).orWhere(
              'tgfcab.aprovado IS NULL',
            );
          }),
        );
      }
    }

    if (query.isIrfRetido !== undefined) {
      if (query.isIrfRetido) {
        queryBuilder.andWhere('tgfcab.irfretido = :irfretido', {
          irfretido: 'S',
        });
      } else {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where('tgfcab.irfretido = :irfretido', {
              irfretido: 'N',
            }).orWhere('tgfcab.irfretido IS NULL');
          }),
        );
      }
    }

    if (query.isIssRetido !== undefined) {
      if (query.isIssRetido) {
        queryBuilder.andWhere('tgfcab.issretido = :issretido', {
          issretido: 'S',
        });
      } else {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where('tgfcab.issretido = :issretido', {
              issretido: 'N',
            }).orWhere('tgfcab.issretido IS NULL');
          }),
        );
      }
    }

    if (query.sort && query.sort.length > 0) {
      query.sort.forEach((sort) => {
        queryBuilder.addOrderBy(
          `tgfcab.${sort.orderBy}`,
          sort.order as 'ASC' | 'DESC',
        );
      });
    } else {
      queryBuilder.orderBy('tgfcab.nunota', 'DESC');
    }

    queryBuilder
      .skip(query.page ? (query.page - 1) * (query.limit || 10) : 0)
      .take(query.limit || 10);

    console.log('antes do getManyAndCount findAllSummarized');

    const [entities, total] = await queryBuilder.getManyAndCount();

    console.log('depois do getManyAndCount findAllSummarized', {
      total,
      entitiesLength: entities.length,
    });
    const lastPage = Math.ceil(total / (query.limit || 10));
    const hasMore = (query.page || 1) < lastPage;

    return {
      data: entities.map((item) => TgfcabMapper.toDomain(item)),
      meta: {
        total,
        lastPage,
        currentPage: query.page || 1,
        perPage: query.limit || 10,
        prev: (query.page || 1) > 1 ? (query.page || 1) - 1 : null,
        next: hasMore ? (query.page || 1) + 1 : null,
        hasMore,
      },
    };
  }

  async create(entity: Tgfcab): Promise<Tgfcab> {
    const persistenceEntity = TgfcabMapper.toPersistence(entity as Tgfcab);
    const createdEntity = await this.repository.save(persistenceEntity);
    return TgfcabMapper.toDomain(createdEntity);
  }

  async update(id: number, entity: Partial<Tgfcab>): Promise<Tgfcab | null> {
    const persistenceEntity = TgfcabMapper.toPersistence(entity as Tgfcab);
    await this.repository.update(id, persistenceEntity);
    return this.findById(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
('');

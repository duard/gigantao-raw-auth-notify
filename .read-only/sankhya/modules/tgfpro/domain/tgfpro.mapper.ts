import { trimEnd } from 'src/utils/string.utils';
import { TgfproEntity } from '../../../entities/tGFPRO.entity';
import { TgfproResponseDto } from '../dto/tgfpro-response.dto';
import { TgfproSummaryDto } from '../dto/tgfpro-summary.dto';
import { Tgfpro } from './tgfpro.domain';

export class TgfproMapper {
  static toDomain(raw: TgfproEntity): Tgfpro {
    const domain = new Tgfpro();
    // Map all properties from raw (TgfproEntity) to domain (Tgfpro)
    // This is a simplified mapping, adjust as needed for complex types or relations
    for (const key in raw) {
      if (Object.prototype.hasOwnProperty.call(raw, key)) {
        // Handle specific type conversions if necessary, e.g., Buffer to string for 'imagem'
        if (key === 'imagem' && raw[key] instanceof Buffer) {
          domain[key] = raw[key].toString('base64'); // Convert Buffer to base64 string
        } else {
          domain[key] = raw[key];
        }
      }
    }
    return domain;
  }

  static toResponse(domain: Tgfpro): TgfproResponseDto {
    const response = new TgfproResponseDto();
    // Map all properties from domain (Tgfpro) to response (TgfproResponseDto)
    for (const key in domain) {
      if (Object.prototype.hasOwnProperty.call(domain, key)) {
        response[key] = domain[key];
      }
    }
    return response;
  }

  static toSummaryDto(entity: TgfproEntity): TgfproSummaryDto {
    const summary = new TgfproSummaryDto();
    summary.codprod = entity.codprod;
    summary.descrprod = entity.descrprod;
    summary.referencia = entity.referencia;
    summary.marca = entity.marca;
    summary.ativo = entity.ativo;
    summary.liscontest = entity.liscontest;
    summary.titcontest = entity.titcontest;
    summary.codgrupoprod = entity.codgrupoprod;
    summary.descrgrupoprod = entity.tgfgru?.descrgrupoprod
      ? trimEnd(entity.tgfgru.descrgrupoprod)
      : null; // Map from related entity
    summary.estoque = entity.tgfests?.[0]?.estoque; // Map from related entity, assuming first element
    summary.pesobruto = entity.pesobruto;
    summary.pesoliq = entity.pesoliq;
    summary.estmin = entity.estmin;
    summary.estmax = entity.estmax;
    summary.dtalter = entity.dtalter;
    summary.unidade = entity.unidade;
    summary.ncm = entity.ncm;
    summary.controlado = entity.controlado;
    summary.controlmedic = entity.controlmedic;
    summary.cnae = entity.cnae;
    return summary;
  }
}

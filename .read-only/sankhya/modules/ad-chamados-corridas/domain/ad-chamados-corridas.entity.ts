// src/sankhya/modules/ad-chamados-corridas/entities/ad-chamados-corridas.entity.ts
import { Tgfpar } from 'src/sankhya/interfaces/tgfpar.interface';
import { Tsiusu } from 'src/sankhya/interfaces/tsiusu.interface';

export class AdChamadosCorridas {
  id: number;
  destino: string | null;
  status: string | null;
  dtUpdated: Date | null;
  dtFinished: Date | null;
  dtCreated: Date | null;
  prioridade: string | null;
  buscarlevar: string | null;
  obs: string | null;
  passageirosmercadoria: string | null;
  dtAcionamento: Date | null;
  enviawpp: string | null;
  tgfpar?: Tgfpar;
  tsiusuUsuario?: Tsiusu;
  tsiusuUsuMotorista?: Tsiusu;
  tsiusuUsuSolicitante?: Tsiusu;
}

// src/sankhya/modules/ad-chamados-corridas/dto/search-chamados.dto.ts
export interface SearchChamadosParams {
  q?: string;
  offset?: number;
  limit?: number;
  status?: string;
  prioridade?: string;
  dataInicio?: Date;
  dataFim?: Date;
  destino?: string;
  tipoPassageiroMercadoria?: string;
  ordenarPor?: 'dtCreated' | 'prioridade' | 'status' | 'destino';
  ordem?: 'asc' | 'desc';
}

// src/sankhya/modules/ad-chamados-corridas/dto/paginated-output.dto.ts
export class PaginatedOutputDto<T> {
  data: T[];
  meta: {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: number | null;
    next: number | null;
    hasMore: boolean;
  };
}

// src/sankhya/modules/ad-chamados-corridas/dto/search-response.dto.ts
export interface SearchChamadosResponse
  extends PaginatedOutputDto<AdChamadosCorridas> {
  filtrosAplicados: {
    q?: string;
    status?: string;
    prioridade?: string;
    dataInicio?: Date;
    dataFim?: Date;
    destino?: string;
  };
}

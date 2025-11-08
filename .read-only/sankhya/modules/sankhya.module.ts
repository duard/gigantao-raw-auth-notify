import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as sankhyaEntities from '../sankhya.entities';

import { AdChamadosCorridasModule } from './ad-chamados-corridas/ad-chamados-corridas.module';
import { TfpfunModule } from './tfpfun/tfpfun.module';
import { TfplgrModule } from './tfplgr/tfplgr.module';
import { TgfcabModule } from './tgfcab/tgfcab.module';
import { TgflnfModule } from './tgflnf/tgflnf.module';
import { TmstvcModule } from './tmstvc/tmstvc.module';
import { TsibaiModule } from './tsibai/tsibai.module';
import { TsicidModule } from './tsicid/tsicid.module';
import { TsiendModule } from './tsiend/tsiend.module';
import { TsiufsModule } from './tsiufs/tsiufs.module';
import { TsiusuModule } from './tsiusu/tsiusu.module';

import { TfpreqModule } from './tfpreq/tfpreq.module';

import { AdGigpontosintegraModule } from './ad-gigpontosintegra/ad-gigpontosintegra.module';
import { AdReqdpModule } from './ad-reqdp/ad-reqdp.module';
import { TfpanxModule } from './tfpanx/tfpanx.module';
import { TfpanxdpdModule } from './tfpanxdpd/tfpanxdpd.module';
import { TfpdpdModule } from './tfpdpd/tfpdpd.module';
import { TfpferModule } from './tfpfer/tfpfer.module';

@Module({
  imports: [
    TypeOrmModule.forFeature(Object.values(sankhyaEntities)),
    AdChamadosCorridasModule,
    TmstvcModule,
    TfplgrModule,
    TsiendModule,
    TsicidModule,
    TsibaiModule,
    TsiufsModule,
    TgflnfModule,
    TsiusuModule,
    TfpfunModule,
    TfpreqModule,
    TfpferModule,
    TfpdpdModule,
    AdReqdpModule,
    TfpanxModule,
    TfpanxdpdModule,
    TgfcabModule,
    AdGigpontosintegraModule,
  ],
  exports: [
    TypeOrmModule,
    AdChamadosCorridasModule,
    TmstvcModule,

    TfplgrModule,
    TsiendModule,
    TsicidModule,
    TsibaiModule,
    TsiufsModule,
    TgflnfModule,
    TsiusuModule,
    TfpfunModule,
    TfpreqModule,
    TfpferModule,
    TfpdpdModule,
    AdReqdpModule,
    TfpanxModule,
    TfpanxdpdModule,
    TgfcabModule,
    AdGigpontosintegraModule,
  ],
})
export class SankhyaModule {}

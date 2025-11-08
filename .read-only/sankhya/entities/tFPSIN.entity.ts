import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpcpuEntity } from './tFPCPU.entity';
import { TfpfdsEntity } from './tFPFDS.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfphfuEntity } from './tFPHFU.entity';
import { TfphsaEntity } from './tFPHSA.entity';
import { TfppcaEntity } from './tFPPCA.entity';
import { TfpreqadmEntity } from './tFPREQADM.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TfppreEntity } from './tFPPRE.entity';
import { TgpavaEntity } from './tGPAVA.entity';

@Index('PK_TFPSIN', ['codsind'], { unique: true })
@Entity('TFPSIN', { schema: 'SANKHYA' })
export class TfpsinEntity {
  @Column('smallint', { primary: true, name: 'CODSIND' })
  codsind: number;

  @Column('char', { name: 'NOMESIND', length: 60 })
  nomesind: string;

  @Column('char', { name: 'CGC', nullable: true, length: 14 })
  cgc: string | null;

  @Column('varchar', { name: 'EVENTOCONTASSOC', nullable: true, length: 100 })
  eventocontassoc: string | null;

  @Column('varchar', { name: 'EVENTOCONTSIND', nullable: true, length: 100 })
  eventocontsind: string | null;

  @Column('varchar', { name: 'EVENTOCONTASSIS', nullable: true, length: 100 })
  eventocontassis: string | null;

  @Column('varchar', { name: 'EVENTOCONTCONF', nullable: true, length: 100 })
  eventocontconf: string | null;

  @Column('varchar', { name: 'CODSINDICAL', nullable: true, length: 15 })
  codsindical: string | null;

  @Column('char', { name: 'REGRAADNOTURNO', length: 1, default: () => "'N'" })
  regraadnoturno: string;

  @Column('char', { name: 'TIPHORANOTURNA', length: 1, default: () => "' '" })
  tiphoranoturna: string;

  @Column('char', { name: 'PONTOALTERNATIVO', length: 1, default: () => "'S'" })
  pontoalternativo: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(() => TfpcpuEntity, (tfpcpuEntity) => tfpcpuEntity.codsind2)
  tfpcpus: TfpcpuEntity[];

  @OneToMany(() => TfpfdsEntity, (tfpfdsEntity) => tfpfdsEntity.codsind2)
  tfpfds: TfpfdsEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codsind)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfphfuEntity, (tfphfuEntity) => tfphfuEntity.codsind)
  tfphfus: TfphfuEntity[];

  @OneToMany(() => TfphsaEntity, (tfphsaEntity) => tfphsaEntity.codsind)
  tfphsas: TfphsaEntity[];

  @OneToMany(() => TfppcaEntity, (tfppcaEntity) => tfppcaEntity.codsind)
  tfppcas: TfppcaEntity[];

  @OneToMany(
    () => TfpreqadmEntity,
    (tfpreqadmEntity) => tfpreqadmEntity.codsind,
  )
  tfpreqadms: TfpreqadmEntity[];

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tfpsins)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TfppreEntity, (tfppreEntity) => tfppreEntity.tfpsins)
  @JoinColumn([{ name: 'CODPREF', referencedColumnName: 'codpref' }])
  codpref: TfppreEntity;

  @OneToMany(() => TgpavaEntity, (tgpavaEntity) => tgpavaEntity.codsind)
  tgpavas: TgpavaEntity[];
}

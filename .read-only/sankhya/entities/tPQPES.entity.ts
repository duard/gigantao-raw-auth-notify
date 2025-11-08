import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsposEntity } from './tCSPOS.entity';
import { TpqaneEntity } from './tPQANE.entity';
import { TpqconEntity } from './tPQCON.entity';
import { TpqplaEntity } from './tPQPLA.entity';
import { TpqqueEntity } from './tPQQUE.entity';
import { TcspapEntity } from './tCSPAP.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TpqrpeEntity } from './tPQRPE.entity';

@Index('PK_TPQPES', ['nupesq'], { unique: true })
@Entity('TPQPES', { schema: 'SANKHYA' })
export class TpqpesEntity {
  @Column('int', { primary: true, name: 'NUPESQ' })
  nupesq: number;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('datetime', { name: 'DTAPLICACAO' })
  dtaplicacao: Date;

  @Column('int', { name: 'HORAAPLICACAO' })
  horaaplicacao: number;

  @Column('float', {
    name: 'NOTAFINAL',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  notafinal: number | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'NOMEPESQ', nullable: true, length: 60 })
  nomepesq: string | null;

  @Column('int', { name: 'NUCURRICULOPESQ', nullable: true })
  nucurriculopesq: number | null;

  @Column('char', { name: 'TIPOPESQ', nullable: true, length: 2 })
  tipopesq: string | null;

  @Column('int', { name: 'CODCONTATOPESQ', nullable: true })
  codcontatopesq: number | null;

  @Column('int', { name: 'CODPRODPESQ', nullable: true })
  codprodpesq: number | null;

  @OneToMany(() => TcsposEntity, (tcsposEntity) => tcsposEntity.nupesq2)
  tcspos: TcsposEntity[];

  @OneToMany(() => TpqaneEntity, (tpqaneEntity) => tpqaneEntity.nupesq2)
  tpqanes: TpqaneEntity[];

  @OneToMany(() => TpqconEntity, (tpqconEntity) => tpqconEntity.nupesq2)
  tpqcons: TpqconEntity[];

  @OneToMany(() => TpqconEntity, (tpqconEntity) => tpqconEntity.nupesqavaliado2)
  tpqcons2: TpqconEntity[];

  @OneToMany(() => TpqconEntity, (tpqconEntity) => tpqconEntity.nupesqconsenso2)
  tpqcons3: TpqconEntity[];

  @ManyToOne(() => TpqplaEntity, (tpqplaEntity) => tpqplaEntity.tpqpes)
  @JoinColumn([{ name: 'NUPLA', referencedColumnName: 'nupla' }])
  nupla: TpqplaEntity;

  @ManyToOne(() => TpqqueEntity, (tpqqueEntity) => tpqqueEntity.tpqpes)
  @JoinColumn([{ name: 'CODQUEST', referencedColumnName: 'codquest' }])
  codquest: TpqqueEntity;

  @ManyToOne(() => TcspapEntity, (tcspapEntity) => tcspapEntity.tpqpes)
  @JoinColumn([{ name: 'CODPAPPESQ', referencedColumnName: 'codpap' }])
  codpappesq: TcspapEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tpqpes)
  @JoinColumn([
    { name: 'CODEMPFUNPESQ', referencedColumnName: 'codemp' },
    { name: 'CODFUNCPESQ', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpqpes)
  @JoinColumn([{ name: 'CODUSUPESQ', referencedColumnName: 'codusu' }])
  codusupesq: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpqpes2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tpqpes)
  @JoinColumn([{ name: 'CODPARCPESQ', referencedColumnName: 'codparc' }])
  codparcpesq: TgfparEntity;

  @OneToMany(() => TpqrpeEntity, (tpqrpeEntity) => tpqrpeEntity.nupesq2)
  tpqrpes: TpqrpeEntity[];
}

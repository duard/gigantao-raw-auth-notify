import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TcfcptparEntity } from './tCFCPTPAR.entity';
import { TcfcptpendEntity } from './tCFCPTPEND.entity';

@Index('PK_TCFCPT', ['nucontrole'], { unique: true })
@Entity('TCFCPT', { schema: 'SANKHYA' })
export class TcfcptEntity {
  @Column('int', { primary: true, name: 'NUCONTROLE' })
  nucontrole: number;

  @Column('datetime', { name: 'DHENT', nullable: true })
  dhent: Date | null;

  @Column('datetime', { name: 'DHSAI', nullable: true })
  dhsai: Date | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 10 })
  tipo: string | null;

  @Column('varchar', { name: 'SITUACAO', nullable: true, length: 10 })
  situacao: string | null;

  @Column('float', { name: 'MARCADOR', nullable: true, precision: 53 })
  marcador: number | null;

  @Column('varchar', { name: 'NOMEPARC', nullable: true, length: 100 })
  nomeparc: string | null;

  @Column('int', { name: 'NROCRACHA', nullable: true })
  nrocracha: number | null;

  @Column('varchar', { name: 'RG', nullable: true, length: 100 })
  rg: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 100 })
  telefone: string | null;

  @Column('varchar', { name: 'PLACA', nullable: true, length: 100 })
  placa: string | null;

  @Column('varchar', { name: 'SITUACAOSAI', nullable: true, length: 10 })
  situacaosai: string | null;

  @Column('varchar', { name: 'TIPOPESSOA', nullable: true, length: 10 })
  tipopessoa: string | null;

  @Column('int', { name: 'NUNOTALIB', nullable: true })
  nunotalib: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('int', { name: 'KM', nullable: true })
  km: number | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcfcpts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcfcpts)
  @JoinColumn([{ name: 'CODUSUINC', referencedColumnName: 'codusu' }])
  codusuinc: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcfcpts2)
  @JoinColumn([{ name: 'CODUSUSAI', referencedColumnName: 'codusu' }])
  codususai: TsiusuEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tcfcpts)
  @JoinColumn([{ name: 'CARRETA2', referencedColumnName: 'codveiculo' }])
  carreta: TgfveiEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcfcpts)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcfcpts2)
  @JoinColumn([{ name: 'CODMOTORISTA', referencedColumnName: 'codparc' }])
  codmotorista: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcfcpts3)
  @JoinColumn([{ name: 'CODMOTSAIDA', referencedColumnName: 'codparc' }])
  codmotsaida: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcfcpts4)
  @JoinColumn([{ name: 'CODUSURESP', referencedColumnName: 'codparc' }])
  codusuresp: TgfparEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tcfcpts2)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tcfcpts3)
  @JoinColumn([{ name: 'CARRETA1', referencedColumnName: 'codveiculo' }])
  carreta2: TgfveiEntity;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.tcfcpts)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODCONTATO', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @OneToMany(
    () => TcfcptparEntity,
    (tcfcptparEntity) => tcfcptparEntity.nucontrole2,
  )
  tcfcptpars: TcfcptparEntity[];

  @OneToMany(
    () => TcfcptpendEntity,
    (tcfcptpendEntity) => tcfcptpendEntity.nucontrole2,
  )
  tcfcptpends: TcfcptpendEntity[];
}

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcbcdmEntity } from './tCBCDM.entity';
import { TcbempEntity } from './tCBEMP.entity';
import { TcbtdmEntity } from './tCBTDM.entity';

@Index('PK_TCBDMT', ['codemp', 'codtdm', 'coddmt'], { unique: true })
@Entity('TCBDMT', { schema: 'SANKHYA' })
export class TcbdmtEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODTDM' })
  codtdm: number;

  @Column('char', { primary: true, name: 'CODDMT', length: 30 })
  coddmt: string;

  @Column('char', { name: 'DESCRDMT', length: 60 })
  descrdmt: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('char', { name: 'CODDMTPAI', length: 30 })
  coddmtpai: string;

  @Column('int', { name: 'GRAU' })
  grau: number;

  @Column('char', { name: 'SITUACAO', nullable: true, length: 1 })
  situacao: string | null;

  @Column('char', { name: 'INDGRUBAL', nullable: true, length: 1 })
  indgrubal: string | null;

  @Column('char', { name: 'AGRUPDLPA', length: 1, default: () => "'N'" })
  agrupdlpa: string;

  @Column('char', { name: 'GRUPODEMONST', nullable: true, length: 1 })
  grupodemonst: string | null;

  @Column('char', { name: 'GERADRA', nullable: true, length: 1 })
  geradra: string | null;

  @Column('char', { name: 'INVERTVLRALT', nullable: true, length: 1 })
  invertvlralt: string | null;

  @Column('char', { name: 'GRUPDEMONSDFC', nullable: true, length: 1 })
  grupdemonsdfc: string | null;

  @Column('char', { name: 'SITDFC', nullable: true, length: 1 })
  sitdfc: string | null;

  @Column('char', { name: 'INDGRPDRE', nullable: true, length: 1 })
  indgrpdre: string | null;

  @Column('varchar', { name: 'NUORDEM', nullable: true, length: 19 })
  nuordem: string | null;

  @Column('char', { name: 'INDDCCTAINI', nullable: true, length: 1 })
  inddcctaini: string | null;

  @Column('char', { name: 'INDDCCTAFIN', nullable: true, length: 1 })
  inddcctafin: string | null;

  @OneToMany(() => TcbcdmEntity, (tcbcdmEntity) => tcbcdmEntity.tcbdmt)
  tcbcdms: TcbcdmEntity[];

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbdmts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(() => TcbtdmEntity, (tcbtdmEntity) => tcbtdmEntity.tcbdmts)
  @JoinColumn([{ name: 'CODTDM', referencedColumnName: 'codtdm' }])
  codtdm2: TcbtdmEntity;
}

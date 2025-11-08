import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbpctEntity } from './tCBPCT.entity';

@Index('PK_TCBDNE', ['nuperiodoctb', 'sequencia'], { unique: true })
@Index('TCBDNE_I01', ['nuperiodoctb', 'dhalter', 'codtdm', 'coddmt'], {})
@Entity('TCBDNE', { schema: 'SANKHYA' })
export class TcbdneEntity {
  @Column('int', { primary: true, name: 'NUPERIODOCTB' })
  nuperiodoctb: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'T'" })
  tipo: string;

  @Column('smallint', { name: 'NIVEL', nullable: true })
  nivel: number | null;

  @Column('text', { name: 'TEXTO', nullable: true })
  texto: string | null;

  @Column('varchar', { name: 'IMAGEM', nullable: true, length: 1000 })
  imagem: string | null;

  @Column('varchar', { name: 'DESCIMAGEM', nullable: true, length: 1000 })
  descimagem: string | null;

  @Column('int', { name: 'CODTAB', nullable: true })
  codtab: number | null;

  @Column('varchar', { name: 'TITULO', nullable: true, length: 3103 })
  titulo: string | null;

  @Column('varchar', { name: 'INDENTTIT', nullable: true, length: 20 })
  indenttit: string | null;

  @Column('int', { name: 'NUDNEPAI', nullable: true })
  nudnepai: number | null;

  @Column('int', { name: 'CODTDM', nullable: true })
  codtdm: number | null;

  @Column('varchar', { name: 'CODDMT', nullable: true, length: 30 })
  coddmt: string | null;

  @Column('smallint', { name: 'FORMATDTIMPR', nullable: true })
  formatdtimpr: number | null;

  @Column('char', { name: 'PERCENTUAL', length: 1, default: () => "'N'" })
  percentual: string;

  @Column('smallint', { name: 'SIMBOLOS', nullable: true })
  simbolos: number | null;

  @Column('char', { name: 'QUEBRAPAGINA', length: 1, default: () => "'N'" })
  quebrapagina: string;

  @Column('char', {
    name: 'GERASSINATURA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  gerassinatura: string | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('char', {
    name: 'GERANECOLUNASVALOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  geranecolunasvalor: string | null;

  @ManyToOne(() => TcbpctEntity, (tcbpctEntity) => tcbpctEntity.tcbdnes)
  @JoinColumn([{ name: 'NUPERIODOCTB', referencedColumnName: 'nuperiodoctb' }])
  nuperiodoctb2: TcbpctEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicidEntity } from './tSICID.entity';

@Index('PK_TSICAN', ['codcan', 'codcid'], { unique: true })
@Entity('TSICAN', { schema: 'SANKHYA' })
export class TsicanEntity {
  @Column('varchar', { primary: true, name: 'CODCAN', length: 10 })
  codcan: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'N'" })
  ativo: string;

  @Column('varchar', { name: 'MOTIVO', nullable: true, length: 80 })
  motivo: string | null;

  @Column('char', { name: 'ENVIARPREFEITURA', length: 1, default: () => "'C'" })
  enviarprefeitura: string;

  @Column('int', { primary: true, name: 'CODCID' })
  codcid: number;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'C'" })
  tipo: string;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tsicans)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;
}

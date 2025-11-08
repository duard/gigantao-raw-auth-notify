import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsimodEntity } from './tSIMOD.entity';

@Index('PK_TSIBTA', ['idbtnacao'], { unique: true })
@Entity('TSIBTA', { schema: 'SANKHYA' })
export class TsibtaEntity {
  @Column('int', { primary: true, name: 'IDBTNACAO' })
  idbtnacao: number;

  @Column('varchar', { name: 'NOMEINSTANCIA', nullable: true, length: 30 })
  nomeinstancia: string | null;

  @Column('varchar', { name: 'RESOURCEID', nullable: true, length: 3103 })
  resourceid: string | null;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('varchar', { name: 'TIPO', length: 2 })
  tipo: string;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('char', { name: 'CONTROLAACESSO', length: 1, default: () => "'N'" })
  controlaacesso: string;

  @Column('varchar', { name: 'TECLAATALHO', nullable: true, length: 100 })
  teclaatalho: string | null;

  @ManyToOne(() => TsimodEntity, (tsimodEntity) => tsimodEntity.tsibtas)
  @JoinColumn([{ name: 'CODMODULO', referencedColumnName: 'codmodulo' }])
  codmodulo: TsimodEntity;
}

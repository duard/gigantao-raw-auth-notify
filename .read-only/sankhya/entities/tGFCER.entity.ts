import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfregEntity } from './tGFREG.entity';

@Index('PK_TGFCER', ['tipo', 'chave', 'codregra'], { unique: true })
@Entity('TGFCER', { schema: 'SANKHYA' })
export class TgfcerEntity {
  @Column('varchar', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('int', { primary: true, name: 'CHAVE' })
  chave: number;

  @Column('int', { primary: true, name: 'CODREGRA' })
  codregra: number;

  @Column('smallint', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'FILTRAR', length: 1, default: () => "'S'" })
  filtrar: string;

  @Column('char', { name: 'RECONTAR', length: 1, default: () => "'S'" })
  recontar: string;

  @ManyToOne(() => TgfregEntity, (tgfregEntity) => tgfregEntity.tgfcers)
  @JoinColumn([{ name: 'CODREGRA', referencedColumnName: 'codregra' }])
  codregra2: TgfregEntity;
}

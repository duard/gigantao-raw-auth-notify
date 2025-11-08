import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSICFG', ['chave', 'tipo', 'codusu'], { unique: true })
@Entity('TSICFG', { schema: 'SANKHYA' })
export class TsicfgEntity {
  @Column('varchar', { primary: true, name: 'CHAVE', length: 400 })
  chave: string;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('char', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @Column('varchar', { name: 'CHAVEPAI', nullable: true, length: 100 })
  chavepai: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsicfgs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}

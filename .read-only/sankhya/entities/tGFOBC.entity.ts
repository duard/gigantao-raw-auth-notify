import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfocoEntity } from './tGFOCO.entity';

@Index('PK_TGFOBC', ['codbco', 'codocor'], { unique: true })
@Entity('TGFOBC', { schema: 'SANKHYA' })
export class TgfobcEntity {
  @Column('smallint', { primary: true, name: 'CODBCO' })
  codbco: number;

  @Column('smallint', { primary: true, name: 'CODOCOR' })
  codocor: number;

  @Column('char', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @OneToMany(() => TgfocoEntity, (tgfocoEntity) => tgfocoEntity.tgfobc)
  tgfocos: TgfocoEntity[];
}

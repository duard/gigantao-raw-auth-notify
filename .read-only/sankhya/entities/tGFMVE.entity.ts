import { Column, Entity, Index, JoinTable, ManyToMany } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFMVE', ['codmodvei'], { unique: true })
@Entity('TGFMVE', { schema: 'SANKHYA' })
export class TgfmveEntity {
  @Column('int', { primary: true, name: 'CODMODVEI' })
  codmodvei: number;

  @Column('varchar', { name: 'DESCRMODVEI', length: 60 })
  descrmodvei: string;

  @Column('smallint', { name: 'CILINDRADA' })
  cilindrada: number;

  @Column('char', { name: 'COMBUSTIVEL', length: 1 })
  combustivel: string;

  @ManyToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfmves)
  @JoinTable({
    name: 'TGFPLM',
    joinColumns: [{ name: 'CODMODVEI', referencedColumnName: 'codmodvei' }],
    inverseJoinColumns: [{ name: 'CODPROD', referencedColumnName: 'codprod' }],
    schema: 'SANKHYA',
  })
  tgfpros: TgfproEntity[];
}

import { Column, Entity, Index, JoinTable, ManyToMany } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFIMG', ['codimagem'], { unique: true })
@Entity('TGFIMG', { schema: 'SANKHYA' })
export class TgfimgEntity {
  @Column('int', { primary: true, name: 'CODIMAGEM' })
  codimagem: number;

  @Column('char', { name: 'DESCRIMAGEM', nullable: true, length: 40 })
  descrimagem: string | null;

  @Column('smallint', { name: 'CODGRUPOIMAGEM', nullable: true })
  codgrupoimagem: number | null;

  @Column('char', { name: 'REFERENCIAETQ', nullable: true, length: 1 })
  referenciaetq: string | null;

  @Column('varchar', { name: 'REFERENCIAGRUPO', nullable: true, length: 2 })
  referenciagrupo: string | null;

  @ManyToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfimgs)
  @JoinTable({
    name: 'TGFPIM',
    joinColumns: [{ name: 'CODIMAGEM', referencedColumnName: 'codimagem' }],
    inverseJoinColumns: [{ name: 'CODPROD', referencedColumnName: 'codprod' }],
    schema: 'SANKHYA',
  })
  tgfpros: TgfproEntity[];
}

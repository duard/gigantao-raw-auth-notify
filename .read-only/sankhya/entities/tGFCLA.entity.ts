import { Column, Entity, Index, JoinTable, ManyToMany } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFCLA', ['codclassif'], { unique: true })
@Entity('TGFCLA', { schema: 'SANKHYA' })
export class TgfclaEntity {
  @Column('int', { primary: true, name: 'CODCLASSIF' })
  codclassif: number;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @ManyToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfclas)
  @JoinTable({
    name: 'TGFCLP',
    joinColumns: [{ name: 'CODCLASSIF', referencedColumnName: 'codclassif' }],
    inverseJoinColumns: [{ name: 'CODPROD', referencedColumnName: 'codprod' }],
    schema: 'SANKHYA',
  })
  tgfpros: TgfproEntity[];
}

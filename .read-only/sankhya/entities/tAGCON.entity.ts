import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TagcabEntity } from './tAGCAB.entity';
import { TagfinEntity } from './tAGFIN.entity';

@Index('PK_TAGCON', ['id'], { unique: true })
@Entity('TAGCON', { schema: 'SANKHYA' })
export class TagconEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 200 })
  descricao: string | null;

  @Column('varchar', { name: 'SEGMENTO', nullable: true, length: 100 })
  segmento: string | null;

  @Column('varchar', { name: 'TIPOMVTO', nullable: true, length: 100 })
  tipomvto: string | null;

  @OneToMany(() => TagcabEntity, (tagcabEntity) => tagcabEntity.idConfig2)
  tagcabs: TagcabEntity[];

  @OneToMany(() => TagfinEntity, (tagfinEntity) => tagfinEntity.idConfig2)
  tagfins: TagfinEntity[];
}

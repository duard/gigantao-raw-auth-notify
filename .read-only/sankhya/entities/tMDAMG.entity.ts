import { Column, Entity, Index, ManyToMany } from 'typeorm';
import { TmdfmgEntity } from './tMDFMG.entity';

@Index('PK_TMDAMG', ['nuanexo'], { unique: true })
@Entity('TMDAMG', { schema: 'SANKHYA' })
export class TmdamgEntity {
  @Column('int', { primary: true, name: 'NUANEXO' })
  nuanexo: number;

  @Column('varchar', { name: 'NOMEARQUIVO', nullable: true, length: 200 })
  nomearquivo: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 100 })
  tipo: string | null;

  @Column('image', { name: 'ANEXO', nullable: true })
  anexo: Buffer | null;

  @Column('varchar', { name: 'CID', nullable: true, length: 50 })
  cid: string | null;

  @ManyToMany(() => TmdfmgEntity, (tmdfmgEntity) => tmdfmgEntity.tmdamgs)
  tmdfmgs: TmdfmgEntity[];
}

import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TmstabprecosEntity } from './tMSTABPRECOS.entity';

@Index('PK_TMSTABPRECO', ['codtab'], { unique: true })
@Entity('TMSTABFRETE', { schema: 'SANKHYA' })
export class TmstabfreteEntity {
  @Column('int', { primary: true, name: 'CODTAB' })
  codtab: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('varchar', { name: 'TIPOCALFRETE', length: 10 })
  tipocalfrete: string;

  @Column('varchar', { name: 'TIPOVLRFRETE', nullable: true, length: 10 })
  tipovlrfrete: string | null;

  @OneToMany(
    () => TmstabprecosEntity,
    (tmstabprecosEntity) => tmstabprecosEntity.codtab2,
  )
  tmstabprecos: TmstabprecosEntity[];
}

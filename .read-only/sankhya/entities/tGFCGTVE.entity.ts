import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfigtveEntity } from './tGFIGTVE.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFCGTVE', ['nunota', 'idgtve', 'idcgtve'], { unique: true })
@Entity('TGFCGTVE', { schema: 'SANKHYA' })
export class TgfcgtveEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'IDGTVE' })
  idgtve: number;

  @Column('smallint', { primary: true, name: 'IDCGTVE' })
  idcgtve: number;

  @Column('smallint', { name: 'TIPOCOMP', nullable: true })
  tipocomp: number | null;

  @Column('float', { name: 'VCOMP', nullable: true, precision: 53 })
  vcomp: number | null;

  @Column('varchar', { name: 'XCOMP', nullable: true, length: 100 })
  xcomp: string | null;

  @ManyToOne(() => TgfigtveEntity, (tgfigtveEntity) => tgfigtveEntity.tgfcgtves)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'IDGTVE', referencedColumnName: 'idgtve' },
  ])
  tgfigtve: TgfigtveEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcgtves)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfidstEntity } from './tGFIDST.entity';

@Index('PK_TGFADST', ['nunota'], { unique: true })
@Entity('TGFADST', { schema: 'SANKHYA' })
export class TgfadstEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('float', { name: 'BASESUBSTITCALC', nullable: true, precision: 53 })
  basesubstitcalc: number | null;

  @Column('float', { name: 'VLRSUBSTCALC', nullable: true, precision: 53 })
  vlrsubstcalc: number | null;

  @Column('float', { name: 'BASESUBSTITNOTA', nullable: true, precision: 53 })
  basesubstitnota: number | null;

  @Column('float', { name: 'VLRSUBSTNOTA', nullable: true, precision: 53 })
  vlrsubstnota: number | null;

  @Column('float', { name: 'VLRTOTDIVSUBST', nullable: true, precision: 53 })
  vlrtotdivsubst: number | null;

  @Column('char', {
    name: 'STATUS',
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  status: string | null;

  @Column('char', {
    name: 'DIGITADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  digitado: string | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfadsts)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin: TgffinEntity;

  @OneToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfadst)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @OneToMany(() => TgfidstEntity, (tgfidstEntity) => tgfidstEntity.nunota2)
  tgfidsts: TgfidstEntity[];
}

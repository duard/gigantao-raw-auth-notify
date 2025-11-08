import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgwivlEntity } from './tGWIVL.entity';
import { TgwsepEntity } from './tGWSEP.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGWREV', ['idrev'], { unique: true })
@Index('TGWREV_I01', ['nuseparacao', 'nunota'], {})
@Index('TGWREV_I02', ['nunota', 'nuseparacao'], {})
@Index('TGWREV_I03', ['dhinc', 'dhimpressao'], {})
@Entity('TGWREV', { schema: 'SANKHYA' })
export class TgwrevEntity {
  @Column('int', { primary: true, name: 'IDREV' })
  idrev: number;

  @Column('int', { name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'SEQETIQUETA' })
  seqetiqueta: number;

  @Column('datetime', { name: 'DHINC' })
  dhinc: Date;

  @Column('varchar', { name: 'EXIGECONF', length: 1, default: () => "'N'" })
  exigeconf: string;

  @Column('datetime', { name: 'DHINICONF', nullable: true })
  dhiniconf: Date | null;

  @Column('datetime', { name: 'DHFINCONF', nullable: true })
  dhfinconf: Date | null;

  @Column('datetime', { name: 'DHIMPRESSAO', nullable: true })
  dhimpressao: Date | null;

  @Column('int', { name: 'SEQUENCIA', default: () => '(0)' })
  sequencia: number;

  @Column('float', { name: 'PESO', precision: 53, default: () => '(0)' })
  peso: number;

  @Column('varchar', { name: 'NOMEIMPRESSORA', nullable: true, length: 100 })
  nomeimpressora: string | null;

  @OneToMany(() => TgwivlEntity, (tgwivlEntity) => tgwivlEntity.idrev)
  tgwivls: TgwivlEntity[];

  @ManyToOne(() => TgwsepEntity, (tgwsepEntity) => tgwsepEntity.tgwrevs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUSEPARACAO', referencedColumnName: 'nuseparacao' }])
  nuseparacao2: TgwsepEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgwrevs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwrevs)
  @JoinColumn([{ name: 'CODUSUCONF', referencedColumnName: 'codusu' }])
  codusuconf: TsiusuEntity;
}

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfditbEntity } from './tGFDITB.entity';

@Index('PK_TGFCITB', ['codemp'], { unique: true })
@Entity('TGFCITB', { schema: 'SANKHYA' })
export class TgfcitbEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { name: 'ATIVA', nullable: true, length: 1 })
  ativa: string | null;

  @Column('text', { name: 'FILTROPROD', nullable: true })
  filtroprod: string | null;

  @Column('text', { name: 'FILTROUF', nullable: true })
  filtrouf: string | null;

  @Column('text', { name: 'FILTROCARAC', nullable: true })
  filtrocarac: string | null;

  @Column('text', { name: 'FILTROUSOPROD', nullable: true })
  filtrousoprod: string | null;

  @Column('text', { name: 'FILTROCFOP', nullable: true })
  filtrocfop: string | null;

  @Column('varchar', { name: 'LOGIN', nullable: true, length: 60 })
  login: string | null;

  @Column('varchar', { name: 'SENHA', nullable: true, length: 60 })
  senha: string | null;

  @OneToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfcitb, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @OneToMany(() => TgfditbEntity, (tgfditbEntity) => tgfditbEntity.codemp2)
  tgfditbs: TgfditbEntity[];
}

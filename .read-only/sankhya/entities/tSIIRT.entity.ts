import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiretEntity } from './tSIRET.entity';
import { TsiobcEntity } from './tSIOBC.entity';

@Index('PK_TSIIRT', ['codigo', 'sequencia'], { unique: true })
@Entity('TSIIRT', { schema: 'SANKHYA' })
export class TsiirtEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'NOME', nullable: true, length: 40 })
  nome: string | null;

  @Column('smallint', { name: 'QTDDEC', nullable: true })
  qtddec: number | null;

  @Column('smallint', { name: 'POSINI' })
  posini: number;

  @Column('smallint', { name: 'POSFIM' })
  posfim: number;

  @Column('char', { name: 'IDLINHA', length: 1, default: () => "'N'" })
  idlinha: string;

  @Column('char', { name: 'IDVALOR', nullable: true, length: 255 })
  idvalor: string | null;

  @ManyToOne(() => TsiretEntity, (tsiretEntity) => tsiretEntity.tsiirts)
  @JoinColumn([{ name: 'CODIGO', referencedColumnName: 'codigo' }])
  codigo2: TsiretEntity;

  @OneToMany(() => TsiobcEntity, (tsiobcEntity) => tsiobcEntity.tsiirt)
  tsiobcs: TsiobcEntity[];

  @OneToMany(() => TsiobcEntity, (tsiobcEntity) => tsiobcEntity.tsiirt2)
  tsiobcs2: TsiobcEntity[];
}

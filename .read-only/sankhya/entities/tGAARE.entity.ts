import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgaculEntity } from './tGACUL.entity';
import { TgagarEntity } from './tGAGAR.entity';
import { TgainsEntity } from './tGAINS.entity';

@Index('PK_TGAARE', ['codparc', 'codarea'], { unique: true })
@Entity('TGAARE', { schema: 'SANKHYA' })
export class TgaareEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODAREA' })
  codarea: number;

  @Column('char', { name: 'NOME', length: 60 })
  nome: string;

  @Column('char', { name: 'TIPAREA', length: 1, default: () => "'P'" })
  tiparea: string;

  @Column('int', { name: 'AREATOTAL', nullable: true })
  areatotal: number | null;

  @Column('int', { name: 'AREAPRODUTIVA', nullable: true })
  areaprodutiva: number | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 15 })
  matricula: string | null;

  @Column('varchar', { name: 'LIVRO', nullable: true, length: 15 })
  livro: string | null;

  @Column('varchar', { name: 'INCRA', nullable: true, length: 15 })
  incra: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgaares, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgaares)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @OneToMany(() => TgaculEntity, (tgaculEntity) => tgaculEntity.tgaare)
  tgaculs: TgaculEntity[];

  @OneToMany(() => TgagarEntity, (tgagarEntity) => tgagarEntity.tgaare)
  tgagars: TgagarEntity[];

  @OneToMany(() => TgainsEntity, (tgainsEntity) => tgainsEntity.tgaare)
  tgains: TgainsEntity[];
}

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgaareEntity } from './tGAARE.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgasafEntity } from './tGASAF.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgainsEntity } from './tGAINS.entity';
import { TgarecEntity } from './tGAREC.entity';

@Index('PK_TGACUL', ['codparc', 'codsaf', 'seqplanej'], { unique: true })
@Index('TGACUL_CODSAF', ['codsaf'], {})
@Entity('TGACUL', { schema: 'SANKHYA' })
export class TgaculEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('char', { name: 'CONTROLE', length: 11, default: () => "''" })
  controle: string;

  @Column('char', { name: 'SAFRA', length: 15 })
  safra: string;

  @Column('char', { name: 'VARIEDADE', nullable: true, length: 30 })
  variedade: string | null;

  @Column('float', { name: 'PRODUTIVIDADE', nullable: true, precision: 53 })
  produtividade: number | null;

  @Column('smallint', { name: 'ANOPREVCOLHEITA', nullable: true })
  anoprevcolheita: number | null;

  @Column('smallint', { name: 'MESPREVCOLHEITA', nullable: true })
  mesprevcolheita: number | null;

  @Column('float', { name: 'SACASPREV', nullable: true, precision: 53 })
  sacasprev: number | null;

  @Column('float', { name: 'SACASREAL', nullable: true, precision: 53 })
  sacasreal: number | null;

  @Column('char', { name: 'FINANCIADA', length: 1, default: () => "'N'" })
  financiada: string;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('int', { name: 'AREAPLANTIO', nullable: true })
  areaplantio: number | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('float', { name: 'VLRSACA', nullable: true, precision: 53 })
  vlrsaca: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { primary: true, name: 'CODSAF', default: () => '(0)' })
  codsaf: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQPLANEJ',
    default: () => '(0)',
  })
  seqplanej: number;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgaculs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgaculs)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TgaareEntity, (tgaareEntity) => tgaareEntity.tgaculs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODAREA', referencedColumnName: 'codarea' },
  ])
  tgaare: TgaareEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgaculs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgaculs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgasafEntity, (tgasafEntity) => tgasafEntity.tgaculs)
  @JoinColumn([{ name: 'CODSAF', referencedColumnName: 'codsaf' }])
  codsaf2: TgasafEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgaculs)
  @JoinColumn([{ name: 'CODPARCAGRON', referencedColumnName: 'codparc' }])
  codparcagron: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgaculs2)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @OneToMany(() => TgainsEntity, (tgainsEntity) => tgainsEntity.tgacul)
  tgains: TgainsEntity[];

  @OneToMany(() => TgarecEntity, (tgarecEntity) => tgarecEntity.tgacul)
  tgarecs: TgarecEntity[];
}

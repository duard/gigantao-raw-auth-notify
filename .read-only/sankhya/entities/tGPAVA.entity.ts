import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpcarEntity } from './tFPCAR.entity';
import { TfpsinEntity } from './tFPSIN.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TgpescEntity } from './tGPESC.entity';
import { TgpqueEntity } from './tGPQUE.entity';

@Index('PK_TGPAVA', ['nuavaliacao'], { unique: true })
@Entity('TGPAVA', { schema: 'SANKHYA' })
export class TgpavaEntity {
  @Column('int', { primary: true, name: 'NUAVALIACAO' })
  nuavaliacao: number;

  @Column('varchar', { name: 'DESCRAVALIACAO', length: 100 })
  descravaliacao: string;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'A'" })
  situacao: string;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTLIMITE' })
  dtlimite: Date;

  @Column('datetime', { name: 'DTDISPARO' })
  dtdisparo: Date;

  @Column('datetime', { name: 'DTCALCULO' })
  dtcalculo: Date;

  @Column('datetime', { name: 'DTFECHAM' })
  dtfecham: Date;

  @Column('smallint', { name: 'MODALIDADE', default: () => '(0)' })
  modalidade: number;

  @Column('char', { name: 'TIPAVAAUTO', length: 1, default: () => "'N'" })
  tipavaauto: string;

  @Column('char', { name: 'TIPAVASUP', length: 1, default: () => "'N'" })
  tipavasup: string;

  @Column('char', { name: 'TIPAVAPARES', length: 1, default: () => "'N'" })
  tipavapares: string;

  @Column('char', { name: 'TIPAVASUBORD', length: 1, default: () => "'N'" })
  tipavasubord: string;

  @Column('char', { name: 'TIPAVAOUTROS', length: 1, default: () => "'N'" })
  tipavaoutros: string;

  @Column('char', { name: 'ITEMAVACPTTEC', length: 1, default: () => "'N'" })
  itemavacpttec: string;

  @Column('char', { name: 'ITEMAVACPTCOM', length: 1, default: () => "'N'" })
  itemavacptcom: string;

  @Column('char', { name: 'ITEMAVAARC', length: 1, default: () => "'N'" })
  itemavaarc: string;

  @Column('text', { name: 'TEXTOEMAIL', nullable: true })
  textoemail: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', {
    name: 'TIPOAVALIACAO',
    nullable: true,
    default: () => '(0)',
  })
  tipoavaliacao: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpavas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tgpavas)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo: TfpcarEntity;

  @ManyToOne(() => TfpsinEntity, (tfpsinEntity) => tfpsinEntity.tgpavas)
  @JoinColumn([{ name: 'CODSIND', referencedColumnName: 'codsind' }])
  codsind: TfpsinEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tgpavas)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep: TfpdepEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tgpavas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TfpempEntity;

  @ManyToOne(() => TgpescEntity, (tgpescEntity) => tgpescEntity.tgpavas)
  @JoinColumn([{ name: 'CODESCALA', referencedColumnName: 'codescala' }])
  codescala: TgpescEntity;

  @ManyToOne(() => TgpescEntity, (tgpescEntity) => tgpescEntity.tgpavas2)
  @JoinColumn([{ name: 'CODESCALAPER', referencedColumnName: 'codescala' }])
  codescalaper: TgpescEntity;

  @OneToMany(() => TgpqueEntity, (tgpqueEntity) => tgpqueEntity.nuavaliacao2)
  tgpques: TgpqueEntity[];
}

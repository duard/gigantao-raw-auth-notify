import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgpescEntity } from './tGPESC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpperEntity } from './tFPPER.entity';
import { TgpideEntity } from './tGPIDE.entity';

@Index('PK_TGPDES', ['nuavaliacao', 'nuavaliado', 'codperfil'], {
  unique: true,
})
@Entity('TGPDES', { schema: 'SANKHYA' })
export class TgpdesEntity {
  @Column('int', { primary: true, name: 'NUAVALIACAO' })
  nuavaliacao: number;

  @Column('int', { primary: true, name: 'NUAVALIADO' })
  nuavaliado: number;

  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;

  @Column('int', { name: 'CODNIVELATUAL' })
  codnivelatual: number;

  @Column('int', { name: 'REPMINNIVATUAL' })
  repminnivatual: number;

  @Column('int', { name: 'REPMAXNIVATUAL' })
  repmaxnivatual: number;

  @Column('int', { name: 'QTDEINDNIV' })
  qtdeindniv: number;

  @Column('int', { name: 'NIVELMAXIMONIV' })
  nivelmaximoniv: number;

  @Column('char', { name: 'SEAPLICA', length: 1, default: () => "'S'" })
  seaplica: string;

  @Column('float', { name: 'NOTAAVALIADO', precision: 53 })
  notaavaliado: number;

  @Column('float', { name: 'NOTAAVALIADOR', precision: 53 })
  notaavaliador: number;

  @Column('float', { name: 'NOTACONSENSO', precision: 53 })
  notaconsenso: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TgpescEntity, (tgpescEntity) => tgpescEntity.tgpdes)
  @JoinColumn([{ name: 'CODESCALANIV', referencedColumnName: 'codescala' }])
  codescalaniv: TgpescEntity;

  @ManyToOne(() => TgpescEntity, (tgpescEntity) => tgpescEntity.tgpdes2)
  @JoinColumn([{ name: 'CODESCALAPER', referencedColumnName: 'codescala' }])
  codescalaper: TgpescEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpdes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tgpdes)
  @JoinColumn([{ name: 'CODPERFIL', referencedColumnName: 'codperfil' }])
  codperfil2: TfpperEntity;

  @OneToMany(() => TgpideEntity, (tgpideEntity) => tgpideEntity.tgpdes)
  tgpides: TgpideEntity[];
}

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgacllEntity } from './tGACLL.entity';
import { TapcamEntity } from './tAPCAM.entity';
import { TaptanEntity } from './tAPTAN.entity';

@Index('PK_TAPAMO', ['nuamostra'], { unique: true })
@Index('TAPAMO_I01', ['idamostra'], { unique: true })
@Entity('TAPAMO', { schema: 'SANKHYA' })
export class TapamoEntity {
  @Column('int', { primary: true, name: 'NUAMOSTRA' })
  nuamostra: number;

  @Column('char', { name: 'IDOBJETO', length: 50 })
  idobjeto: string;

  @Column('char', { name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('char', { name: 'TIPOAMOSTRA', length: 1 })
  tipoamostra: string;

  @Column('float', { name: 'PROFINICIAL', nullable: true, precision: 53 })
  profinicial: number | null;

  @Column('float', { name: 'PROFFINAL', nullable: true, precision: 53 })
  proffinal: number | null;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 256 })
  observacao: string | null;

  @Column('int', { name: 'NUAMOSTRAORIG', nullable: true })
  nuamostraorig: number | null;

  @Column('varchar', { name: 'IDAMOSTRA', nullable: true, length: 50 })
  idamostra: string | null;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tapamos)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TgacllEntity, (tgacllEntity) => tgacllEntity.tapamos)
  @JoinColumn([{ name: 'NUCLL', referencedColumnName: 'nucll' }])
  nucll: TgacllEntity;

  @OneToOne(() => TapcamEntity, (tapcamEntity) => tapcamEntity.nuamostra2)
  tapcam: TapcamEntity;

  @ManyToMany(() => TaptanEntity, (taptanEntity) => taptanEntity.tapamos)
  @JoinTable({
    name: 'TAPTAA',
    joinColumns: [{ name: 'NUAMOSTRA', referencedColumnName: 'nuamostra' }],
    inverseJoinColumns: [
      { name: 'CODTIPANA', referencedColumnName: 'codtipana' },
    ],
    schema: 'SANKHYA',
  })
  taptans: TaptanEntity[];
}

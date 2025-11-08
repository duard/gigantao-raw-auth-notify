import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TcatdiEntity } from './tCATDI.entity';
import { TcadisEntity } from './tCADIS.entity';
import { TcaserEntity } from './tCASER.entity';
import { TcaanoEntity } from './tCAANO.entity';
import { TcamapEntity } from './tCAMAP.entity';
import { TcamatEntity } from './tCAMAT.entity';

@Index('PK_TCADSE', ['coddse'], { unique: true })
@Entity('TCADSE', { schema: 'SANKHYA' })
export class TcadseEntity {
  @Column('smallint', { primary: true, name: 'CODDSE' })
  coddse: number;

  @Column('smallint', { name: 'ORDEM' })
  ordem: number;

  @Column('smallint', { name: 'CARGA_HORARIA' })
  cargaHoraria: number;

  @Column('smallint', { name: 'AULAS_SEMANAIS' })
  aulasSemanais: number;

  @Column('char', { name: 'TIPOAVALIACAO', nullable: true, length: 1 })
  tipoavaliacao: string | null;

  @Column('smallint', { name: 'CARHORECUPERA' })
  carhorecupera: number;

  @Column('char', { name: 'RECUPERACAO', nullable: true, length: 1 })
  recuperacao: string | null;

  @Column('char', { name: 'REPROVAPORNOTA', nullable: true, length: 1 })
  reprovapornota: string | null;

  @Column('char', { name: 'REPROVAPORFALTA', nullable: true, length: 1 })
  reprovaporfalta: string | null;

  @Column('char', { name: 'CONTACOMORECUPERACAO', nullable: true, length: 1 })
  contacomorecuperacao: string | null;

  @Column('char', { name: 'OBRIGATORIA', nullable: true, length: 1 })
  obrigatoria: string | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcadses)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TcatdiEntity, (tcatdiEntity) => tcatdiEntity.tcadses)
  @JoinColumn([{ name: 'CODTPDISC', referencedColumnName: 'codtpdisc' }])
  codtpdisc: TcatdiEntity;

  @ManyToOne(() => TcadisEntity, (tcadisEntity) => tcadisEntity.tcadses)
  @JoinColumn([{ name: 'CODDISC', referencedColumnName: 'coddisc' }])
  coddisc: TcadisEntity;

  @ManyToOne(() => TcaserEntity, (tcaserEntity) => tcaserEntity.tcadses)
  @JoinColumn([
    { name: 'CODSER', referencedColumnName: 'codser' },
    { name: 'CODCUR', referencedColumnName: 'codcur' },
  ])
  tcaser: TcaserEntity;

  @ManyToOne(() => TcaanoEntity, (tcaanoEntity) => tcaanoEntity.tcadses)
  @JoinColumn([{ name: 'CODANO', referencedColumnName: 'codano' }])
  codano: TcaanoEntity;

  @OneToMany(() => TcamapEntity, (tcamapEntity) => tcamapEntity.coddse)
  tcamaps: TcamapEntity[];

  @ManyToMany(() => TcamatEntity, (tcamatEntity) => tcamatEntity.tcadses)
  tcamats: TcamatEntity[];
}

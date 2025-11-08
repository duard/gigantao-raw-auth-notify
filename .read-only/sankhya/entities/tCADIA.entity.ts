import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TcamatEntity } from './tCAMAT.entity';
import { TcamapEntity } from './tCAMAP.entity';

@Index('PK_TCADIA', ['numdiario'], { unique: true })
@Entity('TCADIA', { schema: 'SANKHYA' })
export class TcadiaEntity {
  @Column('int', { primary: true, name: 'NUMDIARIO' })
  numdiario: number;

  @Column('datetime', { name: 'DATMOV' })
  datmov: Date;

  @Column('char', { name: 'SITUACAO', nullable: true, length: 1 })
  situacao: string | null;

  @Column('smallint', { name: 'SEQUENCIAL', nullable: true })
  sequencial: number | null;

  @Column('smallint', { name: 'CODTURMA' })
  codturma: number;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcadias)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcadias)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TcamatEntity, (tcamatEntity) => tcamatEntity.tcadias)
  @JoinColumn([{ name: 'CODMAT', referencedColumnName: 'codmat' }])
  codmat: TcamatEntity;

  @OneToMany(() => TcamapEntity, (tcamapEntity) => tcamapEntity.numdiario)
  tcamaps: TcamapEntity[];
}

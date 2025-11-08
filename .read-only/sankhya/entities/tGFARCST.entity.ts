import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ComprarecenteEntity } from './cOMPRARECENTE.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfircstEntity } from './tGFIRCST.entity';

@Index('PK_TGFARCST', ['codemp', 'dtref'], { unique: true })
@Entity('TGFARCST', { schema: 'SANKHYA' })
export class TgfarcstEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', {
    name: 'DESUSOPRODBRICONS',
    length: 1,
    default: () => "'N'",
  })
  desusoprodbricons: string;

  @Column('text', { name: 'FILPERSONALIZADO', nullable: true })
  filpersonalizado: string | null;

  @Column('char', { name: 'APURCONFIRMADA', length: 1, default: () => "'N'" })
  apurconfirmada: string;

  @OneToMany(
    () => ComprarecenteEntity,
    (comprarecenteEntity) => comprarecenteEntity.tgfarcst,
  )
  comprarecentes: ComprarecenteEntity[];

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfarcsts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(() => TgfircstEntity, (tgfircstEntity) => tgfircstEntity.tgfarcst)
  tgfircsts: TgfircstEntity[];
}

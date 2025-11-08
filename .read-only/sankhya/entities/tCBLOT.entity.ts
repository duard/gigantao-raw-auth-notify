import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcblanEntity } from './tCBLAN.entity';
import { TcblanConfEntity } from './tCBLAN_CONF.entity';
import { TcbempEntity } from './tCBEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcbpciEntity } from './tCBPCI.entity';
import { TfpbasEntity } from './tFPBAS.entity';

@Index('PK_TCBLOT', ['codemp', 'referencia', 'numlote'], { unique: true })
@Entity('TCBLOT', { schema: 'SANKHYA' })
export class TcblotEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'NUMLOTE' })
  numlote: number;

  @Column('datetime', { name: 'DTMOV' })
  dtmov: Date;

  @Column('money', { name: 'TOTLOTE', nullable: true })
  totlote: number | null;

  @Column('text', { name: 'COMENTARIOS', nullable: true })
  comentarios: string | null;

  @Column('char', { name: 'SITUACAO', length: 1 })
  situacao: string;

  @Column('int', { name: 'ULTLANC' })
  ultlanc: number;

  @Column('smallint', { name: 'CODEMPCONSOLID', nullable: true })
  codempconsolid: number | null;

  @OneToMany(() => TcblanEntity, (tcblanEntity) => tcblanEntity.tcblot)
  tcblans: TcblanEntity[];

  @OneToMany(
    () => TcblanConfEntity,
    (tcblanConfEntity) => tcblanConfEntity.tcblot,
  )
  tcblanConfs: TcblanConfEntity[];

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcblots)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcblots)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TcbpciEntity, (tcbpciEntity) => tcbpciEntity.tcblot)
  tcbpcis: TcbpciEntity[];

  @OneToMany(() => TfpbasEntity, (tfpbasEntity) => tfpbasEntity.tcblot)
  tfpbas: TfpbasEntity[];
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcblotEntity } from './tCBLOT.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCBPCI', ['codempmov', 'referencia', 'tipo'], { unique: true })
@Entity('TCBPCI', { schema: 'SANKHYA' })
export class TcbpciEntity {
  @Column('smallint', { primary: true, name: 'CODEMPMOV' })
  codempmov: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('datetime', { name: 'DTGERACAO', nullable: true })
  dtgeracao: Date | null;

  @ManyToOne(() => TcblotEntity, (tcblotEntity) => tcblotEntity.tcbpcis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMPCTB', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
    { name: 'NUMLOTE', referencedColumnName: 'numlote' },
  ])
  tcblot: TcblotEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcbpcis)
  @JoinColumn([{ name: 'CODEMPMOV', referencedColumnName: 'codemp' }])
  codempmov2: TsiempEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcbpcis2)
  @JoinColumn([{ name: 'CODEMPCTB', referencedColumnName: 'codemp' }])
  codempctb: TsiempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbpcis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

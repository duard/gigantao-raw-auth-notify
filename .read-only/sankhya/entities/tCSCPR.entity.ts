import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcscgrEntity } from './tCSCGR.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TCSCPR', ['numcontrato', 'grupo', 'codprod'], { unique: true })
@Entity('TCSCPR', { schema: 'SANKHYA' })
export class TcscprEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'GRUPO' })
  grupo: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'QTDNEG', precision: 53 })
  qtdneg: number;

  @Column('float', { name: 'QTDPED', precision: 53, default: () => "'0'" })
  qtdped: number;

  @Column('money', { name: 'VALOR', default: () => '(0)' })
  valor: number;

  @Column('char', { name: 'PRINCIPAL', length: 1, default: () => "'S'" })
  principal: string;

  @Column('char', { name: 'IMPNOTA', length: 1, default: () => "'S'" })
  impnota: string;

  @Column('char', { name: 'IMPOS', length: 1, default: () => "'S'" })
  impos: string;

  @Column('money', { name: 'VLRCOTACAO', default: () => '(0)' })
  vlrcotacao: number;

  @Column('datetime', { name: 'DTCOTACAO', nullable: true })
  dtcotacao: Date | null;

  @Column('datetime', { name: 'DTPREVINST', nullable: true })
  dtprevinst: Date | null;

  @Column('float', { name: 'QTDPEDIR', nullable: true, precision: 53 })
  qtdpedir: number | null;

  @Column('float', { name: 'QTDPEDVDA', nullable: true, precision: 53 })
  qtdpedvda: number | null;

  @ManyToOne(() => TcscgrEntity, (tcscgrEntity) => tcscgrEntity.tcscprs)
  @JoinColumn([
    { name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' },
    { name: 'GRUPO', referencedColumnName: 'grupo' },
  ])
  tcscgr: TcscgrEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcscprs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcscprs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODFORN', referencedColumnName: 'codparc' }])
  codforn: TgfparEntity;
}

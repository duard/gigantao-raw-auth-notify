import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprwcpEntity } from './tPRWCP.entity';

@Index('PK_TPROEE', ['codwcp', 'tipo', 'datahora'], { unique: true })
@Entity('TPROEE', { schema: 'SANKHYA' })
export class TproeeEntity {
  @Column('int', { primary: true, name: 'CODWCP' })
  codwcp: number;

  @Column('char', {
    primary: true,
    name: 'TIPO',
    length: 1,
    default: () => "'D'",
  })
  tipo: string;

  @Column('datetime', { primary: true, name: 'DATAHORA' })
  datahora: Date;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('float', { name: 'TEMPOPROGRAMADO', nullable: true, precision: 53 })
  tempoprogramado: number | null;

  @Column('float', { name: 'TEMPOPRODUZINDO', nullable: true, precision: 53 })
  tempoproduzindo: number | null;

  @Column('float', { name: 'DISPONIBILIDADE', nullable: true, precision: 53 })
  disponibilidade: number | null;

  @Column('float', { name: 'QTDPRODTEORICA', nullable: true, precision: 53 })
  qtdprodteorica: number | null;

  @Column('float', { name: 'QTDPRODREAL', nullable: true, precision: 53 })
  qtdprodreal: number | null;

  @Column('float', { name: 'QTDTOTALAPONTADA', nullable: true, precision: 53 })
  qtdtotalapontada: number | null;

  @Column('float', { name: 'QTDPECASBOAS', nullable: true, precision: 53 })
  qtdpecasboas: number | null;

  @Column('float', { name: 'PERFORMANCE', nullable: true, precision: 53 })
  performance: number | null;

  @Column('float', { name: 'QUALIDADE', nullable: true, precision: 53 })
  qualidade: number | null;

  @Column('float', { name: 'OEE', nullable: true, precision: 53 })
  oee: number | null;

  @ManyToOne(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.tproees)
  @JoinColumn([{ name: 'CODWCP', referencedColumnName: 'codwcp' }])
  codwcp2: TprwcpEntity;
}

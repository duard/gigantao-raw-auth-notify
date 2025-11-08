import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSGERRIS', ['codveiculo', 'sequencia'], { unique: true })
@Entity('TMSCMPGERRIS', { schema: 'SANKHYA' })
export class TmscmpgerrisEntity {
  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODUSUSOL', nullable: true })
  codususol: number | null;

  @Column('datetime', { name: 'DHSOLIC', nullable: true })
  dhsolic: Date | null;

  @Column('varchar', { name: 'PROTOCOLO', nullable: true, length: 100 })
  protocolo: string | null;

  @Column('datetime', { name: 'DTVALIDADE', nullable: true })
  dtvalidade: Date | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('int', { name: 'CODPARCGER', nullable: true })
  codparcger: number | null;

  @Column('int', { name: 'CODPARCMOT', nullable: true })
  codparcmot: number | null;

  @Column('int', { name: 'CARRETA1', nullable: true })
  carreta1: number | null;

  @Column('int', { name: 'CARRETA2', nullable: true })
  carreta2: number | null;

  @Column('int', { name: 'CARRETA3', nullable: true })
  carreta3: number | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCSLIPENDENTE', ['codsoli'], { unique: true })
@Entity('TCSLIPENDENTE', { schema: 'SANKHYA' })
export class TcslipendenteEntity {
  @Column('smallint', { primary: true, name: 'CODSOLI' })
  codsoli: number;

  @Column('varchar', { name: 'CODFONE', nullable: true, length: 256 })
  codfone: string | null;

  @Column('datetime', { name: 'DTLIB', nullable: true })
  dtlib: Date | null;

  @Column('datetime', { name: 'DTSOLI', nullable: true })
  dtsoli: Date | null;

  @Column('int', { name: 'APP', nullable: true })
  app: number | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 100 })
  nome: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcslipendentes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcslipendentes2)
  @JoinColumn([{ name: 'CODUSULIB', referencedColumnName: 'codusu' }])
  codusulib: TsiusuEntity;
}

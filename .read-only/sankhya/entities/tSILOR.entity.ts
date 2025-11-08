import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';

@Index('PK_TSILOR', ['codcencus', 'codusu'], { unique: true })
@Entity('TSILOR', { schema: 'SANKHYA' })
export class TsilorEntity {
  @Column('int', { primary: true, name: 'CODCENCUS' })
  codcencus: number;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;

  @Column('varchar', { name: 'TIPOLIMITE', length: 1 })
  tipolimite: string;

  @Column('varchar', { name: 'SUPLEMENTACAO', nullable: true, length: 1 })
  suplementacao: string | null;

  @Column('varchar', { name: 'ANTECIPACAO', nullable: true, length: 1 })
  antecipacao: string | null;

  @Column('varchar', { name: 'TRANSFERENCIA', nullable: true, length: 1 })
  transferencia: string | null;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tsilors)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;
}

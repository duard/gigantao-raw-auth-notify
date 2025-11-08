import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsictaEntity } from './tSICTA.entity';

@Index('PK_TGFSBC', ['codctabcoint', 'referencia'], { unique: true })
@Entity('TGFSBC', { schema: 'SANKHYA' })
export class TgfsbcEntity {
  @Column('smallint', { primary: true, name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('money', { name: 'SALDOREAL', nullable: true })
  saldoreal: number | null;

  @Column('money', { name: 'SALDOBCO', nullable: true })
  saldobco: number | null;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfsbcs)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint2: TsictaEntity;
}

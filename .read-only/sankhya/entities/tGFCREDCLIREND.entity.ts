import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcredcliEntity } from './tGFCREDCLI.entity';

@Index('PK_TGFCREDCLIREND', ['codcliente', 'codrenda'], { unique: true })
@Entity('TGFCREDCLIREND', { schema: 'SANKHYA' })
export class TgfcredclirendEntity {
  @Column('int', { primary: true, name: 'CODCLIENTE' })
  codcliente: number;

  @Column('int', { primary: true, name: 'CODRENDA' })
  codrenda: number;

  @Column('varchar', { name: 'DESCRRENDA', length: 140 })
  descrrenda: string;

  @Column('char', { name: 'TIPRENDA', length: 1 })
  tiprenda: string;

  @Column('datetime', { name: 'DTCOMPROVACAO', nullable: true })
  dtcomprovacao: Date | null;

  @Column('float', { name: 'VLRRENDA', precision: 53 })
  vlrrenda: number;

  @ManyToOne(
    () => TgfcredcliEntity,
    (tgfcredcliEntity) => tgfcredcliEntity.tgfcredclirends,
  )
  @JoinColumn([{ name: 'CODCLIENTE', referencedColumnName: 'codcliente' }])
  codcliente2: TgfcredcliEntity;
}

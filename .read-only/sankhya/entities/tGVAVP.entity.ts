import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgvpergEntity } from './tGVPERG.entity';

@Index('PK_TGVAVP', ['codaval', 'codperg'], { unique: true })
@Entity('TGVAVP', { schema: 'SANKHYA' })
export class TgvavpEntity {
  @Column('int', { primary: true, name: 'CODAVAL' })
  codaval: number;

  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('float', { name: 'PESO', precision: 53 })
  peso: number;

  @Column('varchar', { name: 'CRITERIO', length: 1 })
  criterio: string;

  @Column('float', { name: 'CORTE', precision: 53 })
  corte: number;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgvavps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgvpergEntity, (tgvpergEntity) => tgvpergEntity.tgvavps)
  @JoinColumn([{ name: 'CODPERG', referencedColumnName: 'codperg' }])
  codperg2: TgvpergEntity;
}

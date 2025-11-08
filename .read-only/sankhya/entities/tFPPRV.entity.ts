import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPPRV', ['codprevidencia'], { unique: true })
@Entity('TFPPRV', { schema: 'SANKHYA' })
export class TfpprvEntity {
  @Column('int', { primary: true, name: 'CODPREVIDENCIA' })
  codprevidencia: number;

  @Column('varchar', { name: 'RAZAOSOCIAL', length: 150 })
  razaosocial: string;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'LISEVENTOS', nullable: true, length: 250 })
  liseventos: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpprvs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

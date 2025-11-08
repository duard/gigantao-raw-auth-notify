import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpreqbenEntity } from './tFPREQBEN.entity';

@Index('PK_TFPREQBENDPD_SEQ', ['id'], { unique: true })
@Entity('TFPREQBENDPD', { schema: 'SANKHYA' })
export class TfpreqbendpdEntity {
  @Column('smallint', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'NOME', nullable: true, length: 200 })
  nome: string | null;

  @Column('smallint', { name: 'GRAUPARENT', nullable: true })
  grauparent: number | null;

  @Column('datetime', { name: 'DTNASC', nullable: true })
  dtnasc: Date | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('int', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @ManyToOne(
    () => TfpreqbenEntity,
    (tfpreqbenEntity) => tfpreqbenEntity.tfpreqbendpds,
  )
  @JoinColumn([{ name: 'REQBENID', referencedColumnName: 'id' }])
  reqben: TfpreqbenEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TwfvarEntity } from './tWFVAR.entity';

@Index('PK_TWFPRV', ['nuvar', 'nome'], { unique: true })
@Entity('TWFPRV', { schema: 'SANKHYA' })
export class TwfprvEntity {
  @Column('int', { primary: true, name: 'NUVAR' })
  nuvar: number;

  @Column('varchar', { primary: true, name: 'NOME', length: 50 })
  nome: string;

  @Column('text', { name: 'VALOR', nullable: true })
  valor: string | null;

  @ManyToOne(() => TwfvarEntity, (twfvarEntity) => twfvarEntity.twfprvs)
  @JoinColumn([{ name: 'NUVAR', referencedColumnName: 'nuvar' }])
  nuvar2: TwfvarEntity;
}

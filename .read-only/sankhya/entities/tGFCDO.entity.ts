import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFCDO', ['codcondomino'], { unique: true })
@Entity('TGFCDO', { schema: 'SANKHYA' })
export class TgfcdoEntity {
  @Column('int', { primary: true, name: 'CODCONDOMINO' })
  codcondomino: number;

  @Column('varchar', { name: 'NOMECONDOMINO', length: 100 })
  nomecondomino: string;

  @Column('varchar', { name: 'CNPJCPF', length: 20 })
  cnpjcpf: string;

  @Column('int', { name: 'ULTPAG' })
  ultpag: number;

  @Column('float', { name: 'PERCENTUAL', precision: 53 })
  percentual: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcdos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

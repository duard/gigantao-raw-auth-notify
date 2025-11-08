import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFSCO', ['codcondomino', 'fimperiodo'], { unique: true })
@Entity('TGFSCO', { schema: 'SANKHYA' })
export class TgfscoEntity {
  @Column('int', { primary: true, name: 'CODCONDOMINO' })
  codcondomino: number;

  @Column('datetime', { primary: true, name: 'FIMPERIODO' })
  fimperiodo: Date;

  @Column('float', { name: 'SALDO', precision: 53 })
  saldo: number;

  @Column('float', { name: 'PERCENTUAL', precision: 53 })
  percentual: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfscos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

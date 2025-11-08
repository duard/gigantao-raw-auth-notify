import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFLLP', ['codprod', 'dtalter'], { unique: true })
@Entity('TGFLLP', { schema: 'SANKHYA' })
export class TgfllpEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'CONTROLE', length: 11 })
  controle: string;

  @Column('datetime', { name: 'DTVALIDADE', nullable: true })
  dtvalidade: Date | null;

  @Column('datetime', {
    primary: true,
    name: 'DTALTER',
    default: () => 'getdate()',
  })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfllps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

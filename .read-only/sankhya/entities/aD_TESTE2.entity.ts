import { Column, Entity, Index } from 'typeorm';

@Index('PK_AD_TESTE2', ['teste'], { unique: true })
@Entity('AD_TESTE2', { schema: 'SANKHYA' })
export class AdTeste2Entity {
  @Column('varchar', { primary: true, name: 'TESTE', length: 100 })
  teste: string;
}
